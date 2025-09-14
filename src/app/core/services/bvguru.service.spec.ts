import { TestBed } from '@angular/core/testing';

import { BvguruService } from './bvguru.service';

describe('BvguruService', () => {
  let service: BvguruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BvguruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
