import { TestBed } from '@angular/core/testing';

import { AuthenticationHardcodedService } from './authentication-hardcoded.service';

describe('AuthenticationHardcodedService', () => {
  let service: AuthenticationHardcodedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationHardcodedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
