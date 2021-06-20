import { TestBed } from '@angular/core/testing';

import { BitlyServiceService } from './bitly-service.service';

describe('BitlyServiceService', () => {
  let service: BitlyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitlyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
