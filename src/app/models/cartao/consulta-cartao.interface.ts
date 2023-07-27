import { Cartoes } from "./cartoes.interface";
import { Usuario } from "../usuario.interface";

export interface ConsultaCartao extends Cartoes {
  usuarios: Usuario[]
}
