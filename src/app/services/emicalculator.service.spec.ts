import { TestBed } from '@angular/core/testing';

import { EMICalculatorService } from './emicalculator.service';

describe('EMICalculatorService', () => {
  let service: EMICalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMICalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
