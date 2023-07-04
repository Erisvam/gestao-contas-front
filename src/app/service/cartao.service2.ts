import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cartao } from '../model/cartao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartaoService2 {

  private data!:JSON;

  private readonly webtarget: string = "../../assets/mock/cartoes.json";

  constructor(private httpClient: HttpClient) { }

  listarCartoes(): Observable<Cartao[]> {
    return this.httpClient.get<Cartao[]>(this.webtarget);
  }
}
