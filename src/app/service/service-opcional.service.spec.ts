import { TestBed } from '@angular/core/testing';

import { ServiceOpcionalService } from './service-opcional.service';

describe('ServiceOpcionalService', () => {
  let service: ServiceOpcionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOpcionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
