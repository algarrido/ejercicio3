import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultadosService } from '../service/resultados.service';
import { Resultados } from './resultados';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  constructor(private serviceResultado: ResultadosService){

  }

  public listadoObservable: Observable<Resultados[]> = this.serviceResultado.getData();
  public listadoVisible: Resultados[] = [];

  ngOnInit(): void {
  }

  verResultados(){
    this.listadoObservable.subscribe((data) => {

      data.forEach( (value : Resultados) =>
        this.listadoVisible.push(value)
      );
    });
    this.listadoVisible=[];
  }

}
