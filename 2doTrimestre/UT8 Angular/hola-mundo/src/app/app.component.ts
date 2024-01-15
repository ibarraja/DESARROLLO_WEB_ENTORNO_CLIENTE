import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hola-mundo',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esto-es-un-title';
  message = 'Esta es nuestra aplicación Angular en clase de DWES';
  information = 'Angular is a proyect supported by Google'
}
