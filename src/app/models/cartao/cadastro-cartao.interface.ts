import { Manager } from "../manager/manager.interface";
import { Cartao } from "./cartao.interface";

export interface CadastroCartaoRequest extends Cartao {
  manager: Manager;
}
