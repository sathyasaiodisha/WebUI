import { TestBed } from '@angular/core/testing';

import { SamithiofficialsService } from './samithiofficials.service';

describe('SamithiofficialsService', () => {
  let service: SamithiofficialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamithiofficialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
