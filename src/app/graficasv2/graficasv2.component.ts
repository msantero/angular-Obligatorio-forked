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

  //  @Input() estollegadelpadre: VentaPaquete[] = [];

  @Output() notify = new EventEmitter();
  //paquetesgrafica: Paquete[] | any;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  paquetesnombre = this.PaqueteCantPersonas.map((p) => p.nombre);
  paquetescantventas = this.PaqueteCantPersonas.map((p) => p.cantidad_ventas);

  //paquetesnombre: string[] = [];

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Cantidad',
          //data: this.PaqueteCantPersonas,
          data: [1, 2, 3],
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
    console.log(
      'Paquetes al afterviewchequed : ' +
        JSON.stringify(this.PaqueteCantPersonas)
    );
  }

  doCheck() {}

  ngAfterViewChecked() {}

  ngAfterContentChecked() {
    console.log(
      'Paquetes al afterviewchequed : ' +
        JSON.stringify(this.PaqueteCantPersonas)
    );
  }
}
