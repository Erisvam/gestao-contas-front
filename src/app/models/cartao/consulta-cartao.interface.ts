import { Cartao } from "./cartao.interface";
import { Usuario } from "../usuario.interface";

export interface ConsultaCartao extends Cartao {
  usuarios: Usuario[]
}
