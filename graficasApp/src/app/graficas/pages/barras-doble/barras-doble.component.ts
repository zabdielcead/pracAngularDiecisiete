import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {
  
  
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  

  proveedoresLabels: string[] =  [ '2021', '2022', '2023', '2024', '2025'];


  proveedoresData: ChartDataset<'bar'> [] =[
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ];

  productoData: ChartDataset<'bar'> [] =[
    { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  ];

  // proveedoresData: ChartData<'bar'> = {
  //   labels: this.proveedoresLabels,
  //   datasets: [
  //     { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
  //     { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  //   ]
  // };
  
  
  
  // productoData: ChartData<'bar'>  = {
  //   labels: this.proveedoresLabels,
  //   datasets: [
  //     { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  //   ]
  // };
  constructor() { 
     

  }

  ngOnInit(): void {
  }
}
