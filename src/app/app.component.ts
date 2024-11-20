import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostrarRegistrosComponent } from "./components/mostrar-registros/mostrar-registros.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MostrarRegistrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parcial-front';
}
