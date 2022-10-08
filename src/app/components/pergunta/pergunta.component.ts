import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PerguntaService } from './pergunta.service';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {
  resposta!: Array<any>;
  texto = "";

  constructor(private perguntaServive: PerguntaService) {}
  
  var_resposta = new FormControl('');
  form = new FormGroup({
    campo_resposta: this.var_resposta
  });

  ngOnInit(): void{

  }

  async onSubmit(){
    try{
      this.perguntaServive.obterResposta(this.var_resposta.value!).subscribe(dados => this.resposta = dados)
      await this.delay(2000);
      this.texto = this.resposta[0].texto;
    }catch(err) {
      this.texto = "Erro";
    }
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
