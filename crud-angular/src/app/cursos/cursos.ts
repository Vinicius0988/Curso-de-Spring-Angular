import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { Curso } from './modelos/Curso';
import { CursoServicos } from './servicos/curso-servicos';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.scss'],
})
export class Cursos {

  // 🔥 Aqui está a tipagem correta — o MatTable aceita perfeitamente
  courses$: Observable<Curso[]>;

  displayedColumns = ['name', 'categoria'];

  constructor(private cursoServicos: CursoServicos) {
    this.courses$ = this.cursoServicos.list();
  }
}
