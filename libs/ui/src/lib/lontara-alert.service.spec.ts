import { TestBed } from '@angular/core/testing';

import { LontaraAlertService } from './lontara-alert.service';

describe('LontaraAlertService', () => {
  let service: LontaraAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LontaraAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
