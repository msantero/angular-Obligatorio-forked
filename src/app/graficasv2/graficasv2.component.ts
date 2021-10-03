import {
  Component,
  Input,
  Output,
  OnInit,
  ViewChild,
  EventEmitter,
} from '@angular/core';

import { Paquete, PaqueteCantPersonas } from '../paquetes';
import { VentaPaquete, VentaResponse } from '../ventas';

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
  @Input() PaqueteCantPersonas!: PaqueteCantPersonas[];
  @Output() notify = new EventEmitter();

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  //para graficas:
  paquetesnombre: string[] = [];
  paquetescantventas: number[] = [];

  constructor() {}

  ngOnInit() {
    this.generoGraficaDestinosCantidad(this.PaqueteCantPersonas);
  }

  ngOnChanges() {
    this.generoGraficaDestinosCantidad(this.PaqueteCantPersonas);
  }

  generoGraficaDestinosCantidad(Paquetecantper: PaqueteCantPersonas[]) {
    this.paquetesnombre = Paquetecantper.map((p) => p.nombre);
    this.paquetescantventas = Paquetecantper.map((p) => p.cantidad);
    //grafica
    this.chartOptions = {
      series: [
        {
          name: 'Cantidad',
          //data: this.PaqueteCantPersonas,
          data: this.paquetescantventas,
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
        //categories: ['pepe', 'luis'],
        categories: this.paquetesnombre,
      },
    };
  }
}
