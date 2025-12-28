import { TestBed } from '@angular/core/testing';

import { ApiQuery } from './api-query';

describe('ApiQuery', () => {
  let service: ApiQuery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiQuery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
