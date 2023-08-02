import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroCartaoRequest } from 'src/app/models/cartao/cadastro-cartao.interface';
import { Cartao } from 'src/app/models/cartao/cartao.interface';
import { ConsultaCartao } from 'src/app/models/cartao/consulta-cartao.interface';
import { RotaApi } from 'src/app/models/commons/rota-api.model';
import {CartaoResponse} from "../../models/cartao/cartao-response-interface";

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  rotaApi: RotaApi = new RotaApi();

  constructor(private httpClient: HttpClient) { }

  listarCartao(): Observable<CartaoResponse> {
    return this.httpClient.get<CartaoResponse>(this.rotaApi.getRotaCartoes());
  }

  consultarCartao(codigoCartao: string): Observable<ConsultaCartao>{
    return this.httpClient.get<ConsultaCartao>(this.rotaApi.getRotaCartoes(codigoCartao));
  }

  deletarCartao(codigoCartao: string): Observable<any> {
    return this.httpClient.delete<any>(this.rotaApi.getRotaCartoes(codigoCartao));
  }

  cadastrarCartao(bodyCartao: CadastroCartaoRequest): Observable<any>{
    return this.httpClient.post<any>(this.rotaApi.getRotaCartoes(), bodyCartao);
  }
}
