import { Injectable } from '@angular/core';
import { Resultados } from '../resultados/resultados';
import { Constants } from '../utilities/Constants';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private listado: Resultados[] = [];
  private url : string = Constants.URL_OBTENER_DATOS;

  constructor(private _httpClient: HttpClient) {
  }

  getData() {
    return this._httpClient.get<Observable<Resultados[]>>(this.url)
        .pipe(catchError(this.handleError('get', [])));
  }

  private handleError (operation = 'operation', result?: any) {
    return (error: any): any[] => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return result;
    };
  }
}
