import { TestBed } from '@angular/core/testing';

import { LoadMapDataService } from './load-map-data.service';

describe('LoadMapDataService', () => {
  let service: LoadMapDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadMapDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
