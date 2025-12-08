import { TestBed } from '@angular/core/testing';

import { CursoServicos } from './curso-servicos';

describe('CursoServicos', () => {
  let service: CursoServicos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServicos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
