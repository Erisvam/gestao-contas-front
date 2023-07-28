import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroCartaoRequest } from 'src/app/models/cartao/cadastro-cartao.interface';
import { Cartao } from 'src/app/models/cartao/cartao.interface';
import { ConsultaCartao } from 'src/app/models/cartao/consulta-cartao.interface';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  readonly uriBase: string = 'http://localhost:8080';

  path = {
    "listarCartao": "/cartoes",
    "consultarCartao": "/cartoes/:codigo_cartao",
    "deletarCartao": "/cartoes/:codigo_cartao",
    "cadastrarCartao": "/cartoes"
  }

  constructor(private httpClient: HttpClient) { }

  listarCartao(): Observable<Cartao[]>{
    let rotaListarCartao = this.uriBase.concat(this.path.listarCartao);
    return this.httpClient.get<Cartao[]>(rotaListarCartao);
  }

  consultarCartao(codigoCartao: string): Observable<ConsultaCartao>{
    let rotaConsultarCartao = this.uriBase.concat(this.path.consultarCartao.replace(":codigo_cartao", codigoCartao));
    return this.httpClient.get<ConsultaCartao>(rotaConsultarCartao);
  }

  deletarCartao(codigoCartao: string): Observable<any> {
    let rotaDeletarCartao = this.uriBase.concat(this.path.deletarCartao.replace(":codigo_cartao", codigoCartao));
    return this.httpClient.delete<any>(rotaDeletarCartao);
  }

  cadastrarCartao(bodyCartao: CadastroCartaoRequest): Observable<any>{
    let rotaCadastrarCartao = this.uriBase.concat(this.path.cadastrarCartao);
    return this.httpClient.post<any>(rotaCadastrarCartao, bodyCartao);
  }
}
