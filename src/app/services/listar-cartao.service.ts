import { Cartoes } from './../models/cartoes.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarCartaoService {

  readonly uriBase: string = 'http://localhost:8080';

  path = {
    "listarCartoes": "/cartoes",
    "consultarCartao": "/cartoes/:codigo_cartao",
    "deletarCartao": "/cartoes/:codigo_cartao",
    "cadastrarCartao": "/cartoes"
  }

  constructor(private httpClient: HttpClient) { }

  listarCartoes(): Observable<Cartoes[]>{
    let rotaListarCartoes = this.uriBase.concat(this.path.listarCartoes);
    return this.httpClient.get<Cartoes[]>(rotaListarCartoes);
  }

  consultarCartao(codigoCartao: string): Observable<any>{
    let rotaConsultarCartao = this.uriBase.concat(this.path.consultarCartao.replace(":codigo_cartao", codigoCartao));
    return this.httpClient.get<any>(rotaConsultarCartao);
  }

  deletarCartao(codigoCartao: string): Observable<any> {
    let rotaDeletarCartao = this.uriBase.concat(this.path.deletarCartao.replace(":codigo_cartao", codigoCartao));
    return this.httpClient.delete<any>(rotaDeletarCartao);
  }

  cadastrarCartao(bodyCartao: any): Observable<any>{
    let rotaCadastrarCartao = this.uriBase.concat(this.path.cadastrarCartao);
    return this.httpClient.post<any>(rotaCadastrarCartao, bodyCartao);
  }
}
