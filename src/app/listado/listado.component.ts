import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  lista:String;
  nombre:string;

  constructor() {
    this.lista="";
    this.nombre="Nombre"
  }

  ngOnInit(): void {
  }

  public listado: String[] = [];


  addLista(){
    if(this.lista=="") {
      console.log("campo vacío")
    }else{
      let miLista=this.lista;
      this.listado?.push(miLista)
      this.lista = "";
    }
  }
}
