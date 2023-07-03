import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartao } from '../model/cartao';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  private readonly webtarget: string = "http://localhost:8080/cartoes";

  constructor(private httpClient: HttpClient) { }

  listarCartoes(): Observable<Cartao[]> {
    return this.httpClient.get<Cartao[]>(this.webtarget);
  }

  consultarCartao(codigo: string): Observable<Cartao> {
    let uri = `${this.webtarget}/${codigo}`;
    return this.httpClient.get<Cartao>(uri);
  }

  deletarCartao(codigo: string): Observable<Cartao>{
    let uri = `${this.webtarget}/${codigo}`;
    return this.httpClient.delete<Cartao>(uri);
  }

  cadastrarCartao(cartao: Cartao): Observable<Cartao> {
    return this.httpClient.post<Cartao>(this.webtarget, cartao);
  }
}
