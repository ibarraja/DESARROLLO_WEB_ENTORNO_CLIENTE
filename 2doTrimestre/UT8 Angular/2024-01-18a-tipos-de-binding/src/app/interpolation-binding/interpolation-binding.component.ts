import { Component } from '@angular/core';

@Component({
  selector: 'interpolation-binding',
  standalone: true,
  imports: [],
  templateUrl: './interpolation-binding.component.html',
  styleUrl: './interpolation-binding.component.css'
})
export class InterpolationBindingComponent {
  public nombre: string = 'Sonia Castillo';
  public edad: number = 25;
  public saludo: string = '¡Buenos días!';
  public rey: string = 'Rey';
}
