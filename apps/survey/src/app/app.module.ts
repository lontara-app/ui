import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlertComponentModule, UploadComponentModule, SelectComponentModule, ButtonComponentModule, InputComponentModule, LontaraUiModule, ModalComponentModule, NavbarComponentModule } from '@lontara/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    LontaraUiModule.forRoot({
      uploadApiUrl: 'https://api-dev.uipod.id/api/storage/v1/image'
    }),
    ButtonComponentModule,
    AlertComponentModule,
    NavbarComponentModule,
    ModalComponentModule,
    InputComponentModule,
    SelectComponentModule,
    UploadComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
