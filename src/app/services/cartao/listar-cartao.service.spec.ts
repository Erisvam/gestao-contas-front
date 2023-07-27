import { TestBed } from '@angular/core/testing';

import { ListarCartaoService } from './listar-cartao.service';

describe('ListarCartaoService', () => {
  let service: ListarCartaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCartaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
