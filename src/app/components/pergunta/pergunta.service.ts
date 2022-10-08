import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_PATH } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class PerguntaService {
  constructor(private httpClient: HttpClient) { }
 
  obterResposta(campo_resposta : string){
    return this.httpClient.get<any[]>(`${API_PATH}` + campo_resposta);
  }
}
