import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-cartao',
  templateUrl: './delete-cartao.component.html',
  styleUrls: ['./delete-cartao.component.css']
})
export class DeleteCartaoComponent {
  
  @Input()
  codigoCartao!: string;
  
  deletarCartao(): void {}
}
