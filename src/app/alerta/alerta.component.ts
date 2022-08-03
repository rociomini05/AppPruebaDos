import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {
 @Input ('texto') mensaje:string;
 @Input () subTitulo:string;
 constructor() {
    this.mensaje ='Mensaje de la alerta por defecto'
    this.subTitulo ='Valor del Subtitulo'
   }

  ngOnInit(): void {
  }

}
