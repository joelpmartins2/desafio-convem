import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { API_PATH } from 'src/environments/environment';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {
  resposta = "";
  texto = "";
  constructor(private httpClient: HttpClient) {}
  
  var_resposta = new FormControl('');
  form = new FormGroup({
    campo_resposta: this.var_resposta
  });

  ngOnInit(): void{

  }

  async onSubmit(){
    var formData: any = new FormData();
    formData.append('resposta', this.var_resposta.value);
    this.httpClient
      .post(`${API_PATH}`, formData)
      .subscribe({
        next: (response:any) => this.resposta = response.resposta,
        error: (error) => this.resposta = error.toString(),
      });
  }
}

