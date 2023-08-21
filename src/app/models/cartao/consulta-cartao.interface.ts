import { Usuario } from "../usuario/usuario";
import { Cartao } from "./cartao.interface";

export interface ConsultaCartao extends Cartao {
  usuarios: Usuario[]
}
