import { Injectable } from '@angular/core';
import { Curso } from '../modelos/Curso';

@Injectable({
  providedIn: 'root',
})
export class CursoServicos {
  
  list(): Curso[] {
    return [
      { id: '1', name: 'Angular Básico', categoria: 'Frontend' },
      { id: '2', name: 'Spring Boot', categoria: 'Backend' }
    ];
  }

}
