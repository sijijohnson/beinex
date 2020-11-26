import { TestBed } from '@angular/core/testing';

import { DformService } from './dform.service';

describe('DformService', () => {
  let service: DformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
