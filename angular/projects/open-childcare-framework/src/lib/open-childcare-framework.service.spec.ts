import { TestBed, inject } from '@angular/core/testing';

import { OpenChildcareFrameworkService } from './open-childcare-framework.service';

describe('OpenChildcareFrameworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenChildcareFrameworkService]
    });
  });

  it('should be created', inject([OpenChildcareFrameworkService], (service: OpenChildcareFrameworkService) => {
    expect(service).toBeTruthy();
  }));
});
