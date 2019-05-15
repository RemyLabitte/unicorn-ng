import { TestBed } from '@angular/core/testing';

import { UnicornsServiceService } from './unicorns-service.service';

describe('UnicornsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnicornsServiceService = TestBed.get(UnicornsServiceService);
    expect(service).toBeTruthy();
  });
});
