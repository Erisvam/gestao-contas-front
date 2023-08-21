import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RotaApi } from 'src/app/models/commons/rota-api.model';
import { Divida } from 'src/app/models/divida/divida';

@Injectable({
  providedIn: 'root'
})
export class DividaService {
  rotaApi: RotaApi = new RotaApi();

  cadastrarDivida(divida: Divida) : Observable<any>{
    return this.httpClient.post<any>(this.rotaApi.getRotaCartoes(), divida);
  }

  constructor(private httpClient: HttpClient) { }
}
