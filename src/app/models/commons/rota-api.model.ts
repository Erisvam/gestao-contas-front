import { HttpHeaders } from "@angular/common/http";
import {environments} from "../../../environments/environments";

const {baseApi} = environments;

export class RotaApi {
  readonly uriApi: string = baseApi;

  rotas = {
    cartoes: "/cartoes",
    usuarios: "/usuarios",
    dividas: "/dividas",
    managers: "/managers",
    login: "/auth/login"
  }

  getRotaCartoes(codigoCartao?: string): string {
    if(codigoCartao == undefined) return this.uriApi.concat(this.rotas.cartoes);
    return this.uriApi.concat(this.rotas.cartoes.concat(`/${codigoCartao}`));
  }

  getRotaUsuarios(idUsuario?: string): string {
    if(idUsuario == undefined) return this.uriApi.concat(this.rotas.usuarios);
    return this.uriApi.concat(this.rotas.usuarios.concat(`/${idUsuario}`));
  }

  getRotaLogin(): string {
    return this.uriApi.concat(this.rotas.login);
  }

  getToken(): HttpHeaders {
    const token = localStorage.getItem("authorization");
    if(token != undefined){
      return new HttpHeaders().append("Authorization", atob(token));
    }
    return new HttpHeaders();
  }
}
