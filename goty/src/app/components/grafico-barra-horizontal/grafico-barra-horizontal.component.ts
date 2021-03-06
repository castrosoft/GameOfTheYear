import { Component, OnDestroy, Input } from '@angular/core';
import 'firebase/firestore';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  @Input() result: any[] = [];
  /*
  result: any[] = [
    {
      "name": "Juego 1",
      "value": 25
    },
    {
      "name": "Juego 2",
      "value": 20
    },
    {
      "name": "Juego 3",
      "value": 15
    },
    {
      "name": "Juego 4",
      "value": 10
    }
  ];
  */

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  //intervalo;

  constructor() {  

    
/*
    this.intervalo = setInterval( () => {
      console.log('ticks');

      const newResults = [...this.result];

      for(let i in this.result){

        newResults[i].value = Math.round(Math.random() * 500);
      } 

      this.result = [...newResults];

    }, 1500);
*/

    
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){
    //clearInterval(this.intervalo);
  }

}
