import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje:string;
  identiParrafo:string;
  identifInput:string;
  constructor() { 
    this.mensaje = 'Un saludo a todos';
    this.identiParrafo='parrafoPrinicipal';
    this.identifInput ='text';

    setTimeout (() => {
      this.mensaje ='Otro mensaje diferente';
      this.identiParrafo ='Main';
      this.identifInput ='password';
    },3000);

  }

  ngOnInit(): void {
  }

  mostrarSaludo():string{
    return 'Saludo desde el metodo';
  }
}
