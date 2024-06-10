import { TestBed } from '@angular/core/testing';

import { PanierService } from '../services/panierservice.service';

describe('PanierserviceService', () => {
  let service: PanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
