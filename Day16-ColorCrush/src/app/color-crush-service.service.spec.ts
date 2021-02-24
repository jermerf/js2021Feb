import { TestBed } from '@angular/core/testing';

import { ColorCrushServiceService } from './color-crush-service.service';

describe('ColorCrushServiceService', () => {
  let service: ColorCrushServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorCrushServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
