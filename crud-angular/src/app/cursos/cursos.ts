import { Component, OnInit } from '@angular/core';
import { Curso } from './modelos/Curso';
import { AppMaterialImportsTsModule } from '../shared/app-material-imports.ts/app-material-imports.ts-module';
import { CommonModule } from '@angular/common';
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

  courses: Curso[] = [
  { id: '1', name: 'Angular Básico', categoria: 'Frontend' },
  { id: '2', name: 'Spring Boot', categoria: 'Backend' }
];

  displayedColumns: string[] = ['name', 'categoria'];

  constructor() {}

  ngOnInit(): void {}
}
