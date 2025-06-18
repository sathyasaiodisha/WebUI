import { TestBed } from '@angular/core/testing';

import { SamithiService } from './samithi.service';

describe('SamithiService', () => {
  let service: SamithiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamithiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
