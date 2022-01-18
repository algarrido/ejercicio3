import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisClientesComponent } from './mis-clientes/mis-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MisClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
