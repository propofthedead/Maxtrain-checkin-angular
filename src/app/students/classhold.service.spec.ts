import { TestBed, inject } from '@angular/core/testing';

import { ClassholdService } from './classhold.service';

describe('ClassholdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassholdService]
    });
  });

  it('should be created', inject([ClassholdService], (service: ClassholdService) => {
    expect(service).toBeTruthy();
  }));
});
