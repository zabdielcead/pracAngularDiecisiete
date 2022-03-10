import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barr',
  templateUrl: './grafica-barr.component.html',
  styles: [
  ]
})
export class GraficaBarrComponent implements OnInit {


  @Input() horizontal:boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;


  @Input() barChartLabels: string [] = [
   // '2021', '2022','2023','2024','2025'
  ];


  @Input() barChardata: ChartDataset<'bar'> [] = [

    //  { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#ED5F76', hoverBackgroundColor: 'blue'},
    //  { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#d665e0', hoverBackgroundColor: 'red' }
  ];
  
  public barChartData: ChartData<'bar'> = {
    datasets: []
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';
 

  // public Comp: ChartData<'bar'> = {
  //   datasets: []
  // };

  

  constructor() {

      
     

   }

  ngOnInit(): void {
    console.log(this.horizontal);

    console.log("barChartLabels", this.barChartLabels);
    console.log("barChardata", this.barChardata);

    if(this.horizontal){
      //this.barChartType = 'horizontalBar';
      
            this.barChartOptions!.indexAxis = 'y'; 
      
            //Para que se nos muestren todos los datos horizontalmente también debemos retirar el               
            //"min" que tenemos en el barChartOptions.
            this.barChartOptions!.scales!["y"]!.min = 0;
    }
    
  this.barChartData = {
    labels: this.barChartLabels,
    datasets: this.barChardata
  }

    
  }

}
