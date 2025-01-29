import { TestBed } from '@angular/core/testing';

import { GetServerDataService } from './get-server-data.service';

describe('GetServerDataService', () => {
  let service: GetServerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetServerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
