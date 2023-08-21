import { DividaUsuario } from "./divida-usuario.interface";

export interface UsuarioDetalhe {
  nome_usuario: string,
  saldo_devedor: number,
  dividas_usuario: DividaUsuario[]
}
