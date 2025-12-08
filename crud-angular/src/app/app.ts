import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Cursos } from "./cursos/cursos";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    Cursos
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
