import { Component } from '@angular/core';
import { Cartao } from 'src/app/model/cartao';
import { CartaoService } from 'src/app/service/cartao.service';

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

  constructor(private cartaoService: CartaoService){}

  salvarCartao(): void{
    this.cartaoService.cadastrarCartao(this.cartao).subscribe(()=> {
      let btnCadastrarCartao = document.getElementById("btnCadastrarCartao");
      btnCadastrarCartao?.setAttribute("data-bs-dismiss", "modal");
      btnCadastrarCartao?.click();
    });
  }
}
