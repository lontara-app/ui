import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LontaraAlertService {
  onError: Subject<any> = new Subject<any>();
  constructor() {}

  setError(data: string, variant?: string) {
    console.log(data);
    this.onError.next({
      error: data ? true : false,
      message: data,
      variant: variant ? variant : 'black'
    });
  }

  show(options: { message: string, variant: string }) {
    console.log(options);
    this.onError.next({
      error: options.message ? true : false,
      message: options.message,
      variant: options.variant ? options.variant : 'black'
    });
  }

}