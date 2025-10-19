import { TestBed } from '@angular/core/testing';

import { DataadminService } from './dataadmin.service';

describe('DataadminService', () => {
  let service: DataadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
