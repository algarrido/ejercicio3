import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre:string="Nombre";
  public listado: String[] =[

];
  lista:String="";

  addLista(){
    let miLista=this.lista;
    this.listado?.push(miLista)
    this.lista = "";
  }


}
