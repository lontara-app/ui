import { Inject, Injectable } from '@angular/core';
import { LontaraConfiguration } from '../interfaces/lontara.styles';

@Injectable({
  providedIn: 'root'
})
export class LontaraStyleService {

  constructor(
    @Inject('styles')
    private styles: LontaraConfiguration
  ) { }

  getInstance() {
    return this.styles;
  }

  createCss(styles: any) {
    const cssArray: string[] = [];
    Object.keys(styles).map(key => {
      cssArray.push(key +':'+styles[key]);
    });
    return cssArray.join(';');
  }
}
