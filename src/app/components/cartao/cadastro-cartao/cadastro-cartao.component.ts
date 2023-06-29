import { Component } from '@angular/core';
import { Cartao } from 'src/app/model/cartao';

@Component({
  selector: 'app-cadastro-cartao',
  templateUrl: './cadastro-cartao.component.html',
  styleUrls: ['./cadastro-cartao.component.css']
})
export class CadastroCartaoComponent {

  cartao: Cartao = {
    codigo: "",
    nome: "",
    data_fechamento: ""
  }

  salvarCartao(): void{
    console.log(this.cartao)
  }
}
