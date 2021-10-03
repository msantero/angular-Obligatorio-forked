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
  @Input() PaqueteCantPersonas!: PaqueteCantPersonas[];
  @Input() paquetes!: Paquete[];
  @Output() notify = new EventEmitter();

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  @ViewChild('chart') chart2!: ChartComponent;
  public chartOptions2!: Partial<ChartOptions> | any;

  //para graficas:
  paquetesnombre: string[] = [];
  paquetescantventas: number[] = [];
  paquetesnombreprom: string[] = [];
  paquetepromedio: number[] = [];

  constructor() {}

  ngOnInit() {
    this.generoGraficaDestinosCantidad(this.PaqueteCantPersonas);
    //this.generoGraficaPromedioPaquete(this.paquetes);
  }

  ngOnChanges() {
    this.generoGraficaDestinosCantidad(this.PaqueteCantPersonas);
    //this.generoGraficaPromedioPaquete(this.paquetes);
  }

  generoGraficaDestinosCantidad(Paquetecantper: PaqueteCantPersonas[]) {
    this.paquetesnombre = Paquetecantper.map((p) => p.nombre);
    this.paquetescantventas = Paquetecantper.map((p) => p.cantidad);

    console.log('llega1:' + JSON.stringify(this.paquetesnombre));
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
        text: 'Gráfica de Destinos con cantidad personas:',
      },
      xaxis: {
        //categories: ['pepe', 'luis'],
        categories: this.paquetesnombre,
      },
    };
  }

  generoGraficaPromedioPaquete(paquetes: Paquete[]) {
    this.paquetesnombreprom = paquetes.map((p) => p.nombre);
    this.paquetepromedio = paquetes.map(
      (p) => (p.precio_mayor + p.precio_menor) / 2
    );
    console.log('llega2:' + JSON.stringify(this.paquetesnombreprom));
    //grafica
    this.chartOptions2 = {
      series: [
        {
          name: 'Promedio',
          //data: this.PaqueteCantPersonas,
          data: this.paquetescantventas,
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
        categories: this.paquetesnombre,
      },
    };
  }
}
