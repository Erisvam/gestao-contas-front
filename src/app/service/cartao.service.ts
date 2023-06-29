import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartao } from '../model/cartao';

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  private webtarget: string = "http://localhost:8080/cartoes";

  constructor(private httpClient: HttpClient) { }

  listarCartoes(): Observable<Cartao[]> {
    return this.httpClient.get<Cartao[]>(this.webtarget);
  }

  consultarCartao(codigo: string): Observable<Cartao> {
    return this.httpClient.get<Cartao>(`${this.webtarget}/${codigo}`);
  }
}
