import { Component, OnInit } from '@angular/core';
import { Curso } from './modelos/Curso';
import { AppMaterialImportsTsModule } from '../shared/app-material-imports.ts/app-material-imports.ts-module';
import { CommonModule } from '@angular/common';
import { CursoServicos } from './servicos/curso-servicos';
@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialImportsTsModule
],
  templateUrl: './cursos.html',
  styleUrls: ['./cursos.scss'],
})
export class Cursos implements OnInit {

  courses: Curso[] = [];

  displayedColumns: string[] = ['name', 'categoria'];

  constructor(private cursoServicos: CursoServicos) {}

  ngOnInit(): void {
    this.courses = this.cursoServicos.list();
  }
}
