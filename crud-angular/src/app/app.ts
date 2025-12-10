import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Cursos } from "./cursos/cursos";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    Cursos,
    MatProgressSpinnerModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
