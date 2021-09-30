import {
  Component,
  Input,
  Output,
  OnInit,
  ViewChild,
  EventEmitter,
} from '@angular/core';

import { Paquete, PaqueteCantPersonas } from '../paquetes';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-graficasv2',
  templateUrl: './graficasv2.component.html',
  styleUrls: ['./graficasv2.component.css'],
})
export class Graficasv2Component implements OnInit {
  @Input() paquetes!: PaqueteCantPersonas[];
  @Output() notify = new EventEmitter();
  //paquetesgrafica: Paquete[] | any;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  // paquetesnombre = this.paquetes.map((p) => p.nombre);

  // paquetescantventas = this.paquetes.map((p) => p.cantidad_ventas);

  //paquetesnombre: string[] = [];

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Cantidad',
          data: [1, 2],
          //data: this.paquetescantventas,
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
      },
      title: {
        text: 'Gráfica de Destinos',
      },
      xaxis: {
        categories: ['verde', 'rojo'],
        //categories: this.paquetesnombre,
      },
    };
  }

  ngOnInit() {
    console.log('Paquetes al inicializar oninit: ' + this.paquetes);
  }
}
