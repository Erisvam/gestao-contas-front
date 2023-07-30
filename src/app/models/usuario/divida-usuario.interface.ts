import { Divida } from "../divida/divida";

export interface DividaUsuario {
  nome_cartao: string,
  valor_total_cartao: number,
  dividas: Divida[]
}
