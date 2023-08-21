import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mensagem-sucesso',
  templateUrl: './mensagem-sucesso.component.html',
  styleUrls: ['./mensagem-sucesso.component.css']
})
export class MensagemSucessoComponent {

  @Input() mensagemSucesso: string = "";

  tempo: number = 3;

  constructor(private router:Router) {}

  ngOnInit(): void {
      let myinterval = setInterval(() => {
        this.tempo = this.tempo - 1
        if(this.tempo === 0) {
          clearInterval(myinterval);
          this.onCarregarHome();
        }
      },600);
  }

  onCarregarHome(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(){}

}
