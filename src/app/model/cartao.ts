import { Usuario } from "./usuario"

export interface Cartao {
    codigo: string
    nome: string
    data_fechamento: string
    valor_total: number
    usuarios: Usuario[] | undefined
}