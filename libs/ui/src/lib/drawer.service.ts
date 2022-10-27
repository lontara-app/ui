import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  showDrawer = false;
  onChange: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  show() {
    this.showDrawer = true;
    this.onChange.next(true);
  }

  hide() {
    this.showDrawer = false;
    this.onChange.next(false);
  }

  toggle() {
    this.showDrawer = !this.showDrawer;
    this.onChange.next(this.showDrawer);
  }
}
