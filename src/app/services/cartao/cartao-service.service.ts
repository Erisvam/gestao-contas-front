import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroCartaoRequest } from 'src/app/models/cartao/cadastro-cartao.interface';
import { ConsultaCartao } from 'src/app/models/cartao/consulta-cartao.interface';
import { RotaApi } from 'src/app/models/commons/rota-api.model';
import { CartaoResponse } from "../../models/cartao/cartao-response-interface";
import { GestaoContasUtilService } from '../utils/gestao-contas-util.model';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  rotaApi: RotaApi = new RotaApi();

  constructor(private httpClient: HttpClient) { }

  listarCartao(): Observable<CartaoResponse> {
    return this.httpClient.get<CartaoResponse>(this.rotaApi.getRotaCartoes(), {headers: GestaoContasUtilService.getHttpHeaders()});
  }

  consultarCartao(codigoCartao: string): Observable<ConsultaCartao>{
    return this.httpClient.get<ConsultaCartao>(this.rotaApi.getRotaCartoes(codigoCartao), {headers: GestaoContasUtilService.getHttpHeaders()});
  }

  deletarCartao(codigoCartao: string): Observable<any> {
    return this.httpClient.delete<any>(this.rotaApi.getRotaCartoes(codigoCartao), {headers: GestaoContasUtilService.getHttpHeaders()});
  }

  cadastrarCartao(bodyCartao: CadastroCartaoRequest): Observable<any>{
    return this.httpClient.post<any>(this.rotaApi.getRotaCartoes(), bodyCartao, {headers: GestaoContasUtilService.getHttpHeaders()});
  }
}
