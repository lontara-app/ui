import { Component, OnInit, NgModule, Input, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { LontaraUploadService } from '../lontara-upload.service';
import { HttpClientModule, HttpEventType } from '@angular/common/http';
import {BehaviorSubject, Subscription} from 'rxjs';


@Component({
  selector: 'lontara-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit, OnDestroy {
  constructor(
    private uploadSservice: LontaraUploadService,
  ) {}
  @Input() onSuccess: any;
  @Input() onError: any;
  @Input() label = '';
  @Input() apiUrl = '';
  @Input() uploadFileType = 'file';
  @Input() initialImage = '';

  public fileUploadControl = new FileUploadControl(undefined, FileUploadValidators.filesLimit(1));
  private subscription: Subscription | undefined;
  public isUploading = false;
  public progress = 0;
  public uploaded = false;
  public readonly preview: BehaviorSubject<string> = new BehaviorSubject('');

  get isUploaded() {
    if (this.fileUploadControl.size === 0) {
      return false;
    } else {
      return true;
    }
  }
  ngOnInit(): void {
    if (this.apiUrl) {
      this.uploadSservice.setApiUrl(this.apiUrl);
    }
    if (this.initialImage) {
      this.preview.next(this.initialImage);
    }
    this.fileUploadControl.valueChanges.subscribe(() => {
      const file = this.fileUploadControl.value;
      if (file.length > 0) {
        this.isUploading = true;
        this.uploadSservice.upload(file[0]).subscribe((event) => {
          console.log(event);
          switch (event.type) {
            // case HttpEventType.Sent:
            //   break;
            case HttpEventType.ResponseHeader:
              if (!event.ok) {
                this.fileUploadControl.clear();
                this.progress = 0;
                this.isUploading = false;
                this.uploaded = false;
                if (this.onError) {
                  this.onError('Failed while trying to upload to our server');
                }
              }
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round(
                (event.loaded / Number(event.total)) * 100
              );
              break;
            case HttpEventType.Response:
              if (event.ok) {
                const res: any = event.body;
                if (this.onSuccess) {
                  this.onSuccess(res);
                }
                this.isUploading = false;
                this.uploaded = true;
              }
              this.progress = 0;
          }
        });
      }
    });

    this.subscription = this.fileUploadControl.valueChanges.subscribe((values: Array<File>) => this.getImage(values[0]));
  }

  public ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    private getImage(file: File): void {
        if (FileReader && file) {
            const fr = new FileReader();
            fr.onload = (e) => this.preview.next(e.target.result);
            fr.readAsDataURL(file);
        } else {
            this.preview.next('');
        }
    }
}

@NgModule({
  imports: [HttpClientModule, CommonModule, BrowserAnimationsModule, BrowserModule, FormsModule, ReactiveFormsModule, FileUploadModule],
  declarations: [UploadComponent],
  exports: [UploadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UploadComponentModule {}
