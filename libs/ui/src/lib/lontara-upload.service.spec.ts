import { TestBed } from '@angular/core/testing';

import { LontaraUploadService } from './lontara-upload.service';

describe('LontaraUploadService', () => {
  let service: LontaraUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LontaraUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
