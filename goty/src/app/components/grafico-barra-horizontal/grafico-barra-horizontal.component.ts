import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

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

  constructor() {  }

  onSelect(event) {
    console.log(event);
  }

}
