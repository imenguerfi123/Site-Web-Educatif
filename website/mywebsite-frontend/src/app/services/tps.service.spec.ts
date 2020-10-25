import { TestBed } from '@angular/core/testing';

import { TpsService } from './tps.service';

describe('TpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TpsService = TestBed.get(TpsService);
    expect(service).toBeTruthy();
  });
});
