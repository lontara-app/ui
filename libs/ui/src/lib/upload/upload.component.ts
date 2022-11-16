import {
  Component,
  OnInit,
  NgModule,
  Input,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
  FileUploadControl,
  FileUploadValidators,
} from '@iplab/ngx-file-upload';
import { LontaraUploadService } from '../lontara-upload.service';
import { HttpClientModule, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'lontara-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(private uploadSservice: LontaraUploadService) {}
  @Input() onSuccess: any;
  @Input() onError: any;
  @Input() label = '';
  public fileUploadControl = new FileUploadControl(
    undefined,
    FileUploadValidators.filesLimit(1)
  );
  public isUploading = false;
  public progress = 0;
  ngOnInit(): void {
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
                const res = event.body;
                if (this.onSuccess) {
                  this.onSuccess(res);
                }
                this.isUploading = false;
              }
              this.progress = 0;
          }
        });
      }
    });
  }
}

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  declarations: [UploadComponent],
  exports: [UploadComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UploadComponentModule {}
