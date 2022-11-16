import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LontaraConfiguration } from '../interfaces/lontara.styles';
import { UploadResponseModel } from './upload/upload-response.model';
import { LontaraAlertService } from './lontara-alert.service';

@Injectable({
  providedIn: 'root',
})
export class LontaraUploadService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly alertService: LontaraAlertService,
    @Inject('styles')
    private styles: LontaraConfiguration
    ) {}

  apiUrl = '';
  setApiUrl(url: string) {
    this.apiUrl = url;
  }
  upload(file: File): Observable<HttpEvent<UploadResponseModel>> {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      return this.httpClient
        .post<UploadResponseModel>(`${this.apiUrl || this.styles.uploadApiUrl}`, formData, {
          headers: {},
          reportProgress: true,
          observe: 'events',
        })
        .pipe(catchError(this.errorMgmt));
    }

  errorMgmt = (error: HttpErrorResponse) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    this.showAlert(errorMessage);
    return throwError(errorMessage);
  }

  private showAlert(message: string) {
    this.alertService.show({
      message: message,
      variant: 'danger',
    });
  }
}
