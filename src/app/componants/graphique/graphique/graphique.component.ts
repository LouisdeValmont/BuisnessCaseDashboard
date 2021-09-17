import { Component,OnInit } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graphique',
  templateUrl: './graphique.component.html',
  styleUrls: ['./graphique.component.css']
})
export class GraphiqueComponent implements OnInit {

  type: ChartType;
  labels: string[];
  datasets: ChartDataset[];
  options: ChartOptions;

  constructor() {
    this.type = 'doughnut';

    this.labels = ['% panier abandonnées', '% conversion en paniers', '% converssion en commande'];

    this.datasets = [
      {
        label: 'Dataset 1',
        data: [25, 25, 50],
        backgroundColor: ['indianred', 'lightgreen', 'lightskyblue'],
        hoverBackgroundColor: ['indianred', 'lightgreen', 'lightskyblue'],
      }
    ];

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: false
        }
      }
    };

   }

  ngOnInit(): void {
  }
}
