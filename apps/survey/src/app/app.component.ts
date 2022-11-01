import { Component, OnInit } from '@angular/core';
import { LontaraAlertService, DrawerService } from '@lontara/ui';

@Component({
  selector: 'lontara-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  show = false;
  constructor(
    private alertService: LontaraAlertService,
    private drawerService: DrawerService
  ) {
    this.drawerService.onChange.subscribe((show) => {
      this.show = show;
    });
  }
  tes = 'test';
  select = '';

  ngOnInit(): void {
    this.alertService.setError('ERROR message ada disini', 'success');
  }

  toggle() {
    this.drawerService.toggle();
  }
}
