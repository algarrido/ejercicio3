import { Component, OnInit } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { Cliente } from './cliente';

@Component({
  selector: 'app-mis-clientes',
  templateUrl: './mis-clientes.component.html',
  styleUrls: ['./mis-clientes.component.css']
})
export class MisClientesComponent implements OnInit {


  clientes: Cliente[];
  cliente: Cliente;

  constructor() {
    this.clientes = [];
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }
  public addCliente(){

    let newPersona= new Cliente(this.cliente.nombre, this.cliente.direccion);
    this.clientes.push(newPersona);
    this.cliente= new Cliente();

  }
}
