import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }


  /*
  data 
  {
  "facebook": 2700,
  "youtube": 2000,
  "whatsapp": 1400,
  "facebook-messenger": 1350,
  "instagram": 1123
}
  */


  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  


  


  public colors: Color[] = [
    
    
    '#0075ED',
    '#00BAF7',
    '#00E0DB',
    '#FF5733',
    '#FFDD33'
  

]
public dataset: number[] = [
];


  // Doughnut
  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: this.dataset,
        backgroundColor: this.colors
      }
    ],
   
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
        .subscribe( data => {
          console.log(data);
          const labels = Object.keys(data);
          const values = Object.values(data);
           Object.values(data).map((valor) => this.dataset.push(Number(valor)));
          this.doughnutChartLabels = labels;
          this.doughnutChartData = {
            labels: this.doughnutChartLabels,
            datasets: [
              { 
                data: this.dataset,
                backgroundColor: this.colors
              }
            ],
          }
          
        } )
  }

}
