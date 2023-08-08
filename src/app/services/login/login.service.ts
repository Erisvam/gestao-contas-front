import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RotaApi } from 'src/app/models/commons/rota-api.model';
import { IAccessToken, ILogin } from 'src/app/models/login/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rotaApi: RotaApi = new RotaApi();

  constructor(private httpClient: HttpClient){ }

  logar(login: ILogin): Observable<IAccessToken> {
    return this.httpClient.post<IAccessToken>(this.rotaApi.getRotaLogin(), login);
  }
}
