import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = 'Masculino';
  constructor(private router: Router ){

  }

  cambiaraltura(event: any){
    this.altura = event.target.value;
  }

  masculino(){
    this.sexo = 'Masculino';
  }
  femenino(){
    this.sexo = 'Femenino';
  }
  calcularBMI(){
    this.router.navigate(['/resultado'])

  }
}
