import { TestBed } from '@angular/core/testing';

import { DocAuthService } from './doc-auth.service';

describe('DocAuthService', () => {
  let service: DocAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
