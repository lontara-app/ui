import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LontaraConfiguration } from '../interfaces/lontara.styles';
import { DefaultStyles } from './default.styles';
import { LontaraStyleService } from './lontara-style.service';
import { LontaraUploadService } from './lontara-upload.service';
import * as _ from 'lodash';

@NgModule({
  imports: [CommonModule],
})
export class LontaraUiModule {
  public static forRoot(customStyle?: LontaraConfiguration): ModuleWithProviders<LontaraUiModule> {
    const additionalStyle = customStyle || {};
    const styles = _.merge(DefaultStyles, additionalStyle);
    return {
      ngModule: LontaraUiModule,
      providers: [
        LontaraStyleService,
        LontaraUploadService,
        {
            provide: 'styles',
            useValue: styles
        }
      ]
  };
  }
}
