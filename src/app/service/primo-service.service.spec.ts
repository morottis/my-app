import { TestBed } from '@angular/core/testing';

import { PrimoServiceService } from './primo-service.service';

describe('PrimoServiceService', () => {
  let service: PrimoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
