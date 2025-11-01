import { TestBed } from '@angular/core/testing';

import { SssootweetsService } from './sssootweets.service';

describe('SssootweetsService', () => {
  let service: SssootweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SssootweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
