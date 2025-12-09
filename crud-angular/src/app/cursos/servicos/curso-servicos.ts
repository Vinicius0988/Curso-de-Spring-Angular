import { Injectable } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Cursos } from '../cursos';

@Injectable({
  providedIn: 'root',
})
export class CursoServicos {

  private readonly API = 'cursos.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      tap((cursos: any) => console.log(cursos))
    );
  }
}
