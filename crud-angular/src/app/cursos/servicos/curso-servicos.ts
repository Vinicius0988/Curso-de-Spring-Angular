import { Injectable } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoServicos {

  private readonly API = 'cursos.json';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap((cursos: any) => console.log(cursos))
    );
  }
}
