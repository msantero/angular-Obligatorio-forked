import { Component, Input, OnInit } from '@angular/core';
import { Paquete } from '../paquetes';
//import { Chart } from 'chart.js';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
})
export class GraficasComponent implements OnInit {
  @Input() paquetes!: Paquete[];

  constructor() {}

  ngOnInit() {}
}
