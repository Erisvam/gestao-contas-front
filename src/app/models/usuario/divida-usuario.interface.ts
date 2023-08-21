import { Divida } from "../divida/divida";

export interface DividaUsuario {
  nome_cartao: string,
  valor_total: number,
  dividas_usuario: Divida[]
}
