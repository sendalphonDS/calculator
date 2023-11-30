import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  bmi:number ;
  resultado: String;
  interpretacion:string;
 constructor(private route: ActivatedRoute){
  this.resultado = '';
  this.interpretacion = '';
  this.bmi = +route.snapshot.paramMap.get('valor')!;
  console.log(this.bmi)
 }


  ngOnInit(): void {
    this.getResultado();
  }
 getResultado(){
  if(this.bmi >=25){
  this.resultado = 'exceso de peso';
  this.interpretacion = 'tienes un peso corporarl superior al normal .Intente hacer ejercicio'
  } else if (this.bmi >= 18.5) {
    this.resultado = 'Normal';
    this.interpretacion = 'Tienes un peso corporal normal . Buen trabajo!'
    
  } else{
   this.resultado = 'Bajo peso';
   this.interpretacion ='Tienes un peso corporal mas bajo de lo normal . Puedes comer mas'
  }

 }


}
