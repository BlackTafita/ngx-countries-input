import { TestBed } from '@angular/core/testing';

import { NgxCountriesInputService } from './ngx-countries-input.service';

describe('NgxCountriesInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCountriesInputService = TestBed.get(NgxCountriesInputService);
    expect(service).toBeTruthy();
  });
});
