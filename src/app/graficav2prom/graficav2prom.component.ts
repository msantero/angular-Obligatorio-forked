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
  selector: 'app-graficav2prom',
  templateUrl: './graficav2prom.component.html',
  styleUrls: ['./graficav2prom.component.css'],
})
export class Graficav2promComponent implements OnInit {
  @Input() paquetes!: Paquete[];

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  //para graficas:
  paquetesnombreprom: string[] = [];
  paquetepromedio: number[] = [];

  constructor() {}

  ngOnInit() {
    this.generoGraficaPromedioPaquete(this.paquetes);
  }

  ngOnChanges() {
    this.generoGraficaPromedioPaquete(this.paquetes);
  }

  generoGraficaPromedioPaquete(paquetes: Paquete[]) {
    this.paquetesnombreprom = paquetes.map(function (obj) {
      if (!obj.nombre) {
        return '';
      } else {
        return obj.nombre;
      }
    });

    this.paquetepromedio = paquetes.map(function (obj) {
      if (!obj.precio_mayor) {
        return 0;
      } else {
        return (obj.precio_mayor + obj!.precio_menor) / 2;
      }
    });

    console.log(
      'paquetesnombre: ' +
        this.paquetesnombreprom +
        ' paquetes cant: ' +
        this.paquetepromedio
    );

    //grafica
    this.chartOptions = {
      series: [
        {
          name: 'Promedio',
          //data: this.PaqueteCantPersonas,
          data: this.paquetepromedio,
        },
      ],
      chart: {
        height: 250,
        type: 'bar',
      },
      title: {
        text: 'Gráfica de precios por destino (promedio):',
      },
      xaxis: {
        //categories: ['pepe', 'luis'],
        categories: this.paquetesnombreprom,
      },
    };
  }
}
