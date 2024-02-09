import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  standalone: true, //TODO con esta propiedad, no es necesario agregar el componente en las declaraciones
  //? de otro componente para importarlo y utilizarlo
  //? Pasa a ser un componente independiente
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  imports: [
    CommonModule //TODO las cosas que requiere este componente se importan directamente, no de algun otro 
    //? componente que esta enlazado a este mismo
  ]
})
export class RegisterPageComponent {

  isShow = false;

}
