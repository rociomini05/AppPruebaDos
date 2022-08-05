import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 titulos: string [];
 campoTexto: string ;
 persona: any;

 constructor (){
  this.titulos = ['Jurassic Park', 'Star Wars', 'Jumanji']
  this.campoTexto = 'Valor Inicial'
  this.persona = {}
 }

 onAlertaPulsada(){
  console.log('Pulsada!!!');
 }
 onClick(){
  this.campoTexto= 'Valor desde el boton'
 }
}
