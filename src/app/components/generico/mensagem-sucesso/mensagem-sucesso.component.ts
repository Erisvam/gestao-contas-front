import { Component, Input } from '@angular/core';

@Component({
  selector: 'mensagem-sucesso',
  templateUrl: './mensagem-sucesso.component.html',
  styleUrls: ['./mensagem-sucesso.component.css']
})
export class MensagemSucessoComponent {

  @Input() mensagemSucesso: string = "";

  tempo: number = 3;

  constructor() {}

}
