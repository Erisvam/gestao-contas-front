import {environments} from "../../../environments/environments";

const {baseApi} = environments;

export class RotaApi {
  readonly uriApi: string = baseApi;

  rotas = {
    cartoes: "/cartoes",
    usuarios: "/usuarios",
    dividas: "/dividas",
    managers: "/managers"
  }

  getRotaCartoes(codigoCartao?: string): string {
    if(codigoCartao == undefined) return this.uriApi.concat(this.rotas.cartoes);
    return this.uriApi.concat(this.rotas.cartoes.concat(`/${codigoCartao}`));
  }

  getRotaUsuarios(idUsuario?: string): string {
    if(idUsuario == undefined) return this.uriApi.concat(this.rotas.usuarios);
    return this.uriApi.concat(this.rotas.usuarios.concat(`/${idUsuario}`));
  }
}
