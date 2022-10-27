import { Component, OnInit } from '@angular/core';
import { LontaraAlertService } from '@lontara/ui';

@Component({
  selector: 'lontara-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private alertService: LontaraAlertService) {}
  tes = 'test';
  select = '';
  
  ngOnInit(): void {
    this.alertService.setError("ERROR message ada disini", 'success');
  }
  
}
