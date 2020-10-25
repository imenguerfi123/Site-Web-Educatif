import { TestBed } from '@angular/core/testing';

import { TDsService } from './tds.service';

describe('TDsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TDsService = TestBed.get(TDsService);
    expect(service).toBeTruthy();
  });
});
