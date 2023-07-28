import { Divida } from "../divida/divida"
import { Pagination } from "../pagination"

export interface UsuarioDetalhe {
    nome: string
    Cartao: [
        {
            id: number,
            nome_cartao: string,
            valor_total: number,
            dividas: Divida[],
            pagination: Pagination
        }
    ],
    saldo_devedor: number
}
