import { Component } from '@angular/core';

@Component({
  selector: 'deletar-cartao',
  templateUrl: './deletar-cartao.component.html',
  styleUrls: ['./deletar-cartao.component.css']
})
export class DeletarCartaoComponent {

  codigoInputado!: string;

  deletarCartao(): void {
    console.log("deletando cartao...");

  }

}
