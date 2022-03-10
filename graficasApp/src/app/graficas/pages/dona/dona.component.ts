import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  public colors: Color[] = [
    
    
    '#0075ED',
    '#00BAF7',
    '#00E0DB'
  

]
  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ 350, 450, 100 ],
        backgroundColor: this.colors
      },
      { 
        data: [ 50, 150, 120 ],
        backgroundColor: this.colors 
      },
      { 
        data: [ 250, 130, 70 ],
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
   
  }

  

}
