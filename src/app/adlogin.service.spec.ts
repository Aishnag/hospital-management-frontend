import { TestBed } from '@angular/core/testing';

import { AdloginService } from './adlogin.service';

describe('AdloginService', () => {
  let service: AdloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
