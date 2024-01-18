import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'two-ways-binding',
  standalone: true,
  imports: [ 
    FormsModule,
    // BrowserModule, 
  ],
  templateUrl: './two-ways-binding.component.html',
  styleUrl: './two-ways-binding.component.css'
})
export class TwoWaysBindingComponent {
  nombre: string ='tu nombre';


}
