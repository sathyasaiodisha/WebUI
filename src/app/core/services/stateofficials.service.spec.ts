import { TestBed } from '@angular/core/testing';

import { StateofficialsService } from './stateofficials.service';

describe('StateofficialsService', () => {
  let service: StateofficialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateofficialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
