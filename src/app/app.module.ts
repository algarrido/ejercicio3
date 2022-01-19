import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisClientesComponent } from './mis-clientes/mis-clientes.component';
import { CondicionalesComponent } from './condicionales/condicionales.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ResultadosService } from './service/resultados.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MisClientesComponent,
    CondicionalesComponent,
    ResultadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [ResultadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
