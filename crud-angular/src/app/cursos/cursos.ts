import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Curso } from './modelos/Curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule],
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
