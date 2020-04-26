import { TestBed } from '@angular/core/testing';

import { ReouteGuardService } from './reoute-guard.service';

describe('ReouteGuardService', () => {
  let service: ReouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
