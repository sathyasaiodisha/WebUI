import { TestBed } from '@angular/core/testing';

import { SaisandeshService } from './saisandesh.service';

describe('SaisandeshService', () => {
  let service: SaisandeshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaisandeshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
