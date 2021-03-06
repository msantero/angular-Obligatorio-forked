import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioAlertsComponent } from './usuario-alerts/usuario-alerts.component';

import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Graficasv2Component } from './graficasv2/graficasv2.component';
import { Graficav2promComponent } from './graficav2prom/graficav2prom.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/:id', component: DashboardComponent },
      //{ path: 'graficas', component: Graficasv2Component },
      //  { path: '', component: ProductListComponent },
      //  { path: 'product/:productId', component: ProductDetailComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    DashboardComponent,
    UsuarioAlertsComponent,
    Graficasv2Component,
    Graficav2promComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
