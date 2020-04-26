import { TestBed } from '@angular/core/testing';

import { HardcordedAuthentificationService } from './hardcorded-authentification.service';

describe('HardcordedAuthentificationService', () => {
  let service: HardcordedAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcordedAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
