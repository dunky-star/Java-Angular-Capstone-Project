import { TestBed } from '@angular/core/testing';

import { DunkyFormService } from './dunky-form.service';

describe('DunkyFormService', () => {
  let service: DunkyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DunkyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
