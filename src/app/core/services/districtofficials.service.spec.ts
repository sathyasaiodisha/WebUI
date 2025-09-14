import { TestBed } from '@angular/core/testing';

import { DistrictofficialsService } from './districtofficials.service';

describe('DistrictofficialsService', () => {
  let service: DistrictofficialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictofficialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
