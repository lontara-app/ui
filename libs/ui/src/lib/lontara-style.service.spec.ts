import { TestBed } from '@angular/core/testing';

import { LontaraStyleService } from './lontara-style.service';

describe('LontaraStyleService', () => {
  let service: LontaraStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LontaraStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
