import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje:string;
  constructor() { 
    this.mensaje = 'Este es el mensaje inicial';
  }

  ngOnInit(): void {
  }
  onClick(){
    console.log('Se ha Pulsado');
  
  }

  onChange ($event: { target: any; }){
    console.log($event.target.value);
  }

  onMouseEnter(){
   // console.log('Entro en el Div')
   this.mensaje = 'Estoy dentro del div';
  }
  onMouseOut(){
    this.mensaje = 'Estoy saliendo del div';
  }
}
