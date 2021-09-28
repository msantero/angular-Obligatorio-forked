import { Component, Input, OnInit } from '@angular/core';
import { Paquete } from '../paquetes';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
})
export class GraficasComponent implements OnInit {
  @Input() paquetes!: Paquete[];

  firstDataset: Chart.ChartDataSets = {};
  BORDER_WIDTH = 3;

  GREEN = '#00c77d';
  BLUE = '#56ccf2';
  VIOLET = '#bc35fb';
  BLUE_VIOLET = '#8c90fc';
  ORANGE = '#f2b94a';

  constructor() {}

  ngOnInit() {}

  // Write TypeScript code!
  ctx = document.getElementById('myChart') as HTMLCanvasElement;
  myChart = new Chart(this.ctx, {
    type: 'doughnut',
    data: {
      labels: ['green', 'yellow', 'green', 'purple', 'blue'],
      datasets: [
        {
          weight: 0,
          data: [50, 805, 50, 600, 200],
          backgroundColor: ['green', 'yellow', 'green', 'purple', 'blue'],
        },
        {
          weight: 1,
          data: [50, 805],
          backgroundColor: ['green', 'yellow'],
          borderColor: (ctx) => {
            console.log(ctx.dataIndex);
            return ctx.dataIndex === 0 ? 'green' : 'rgba(255, 255, 255, 1)';
          },
          borderCapStyle: 'round',
          borderWidth: (ctx) => {
            return this.BORDER_WIDTH;
          },
          // labels: ["green", "yellow"]
        },
        /* {
        weight: 1,
        data: [50, 600, 200],
        backgroundColor: ["green", "purple", "blue"],
        borderColor: ctx => {
          console.log(ctx.dataIndex);
          return ctx.dataIndex === 0 ? "green" : "rgba(255, 255, 255, 1)";
        },
        borderCapStyle: "round",
        borderWidth: this.BORDER_WIDTH,
        //labels: ["green", "purple", "blue"]
      }*/
      ],
    },
    options: {
      responsive: true,
      cutoutPercentage: 15,
      circumference: 2 * Math.PI,
      legend: {
        display: true,
        onClick: null,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var arcIndex = tooltipItem.index;
            return dataset.labels[arcIndex] + ': ' + dataset.data[arcIndex];
          },
        },
      },
      // legendCallback: function(chart) {
      //   return "<p>Something</p>";
      // }
    },
  });
}
