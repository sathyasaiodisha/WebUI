import { TestBed } from '@angular/core/testing';

import { BhajanmandaliService } from './bhajanmandali.service';

describe('BhajanmandaliService', () => {
  let service: BhajanmandaliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BhajanmandaliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
