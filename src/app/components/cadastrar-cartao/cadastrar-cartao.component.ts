import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cadastrar-cartao',
  templateUrl: './cadastrar-cartao.component.html',
  styleUrls: ['./cadastrar-cartao.component.css']
})
export class CadastrarCartaoComponent {

  formularioCadastroCartao!: FormGroup;

  ngOnInit(){
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formularioCadastroCartao = new FormGroup({
      codigoCartao: new FormControl(null, [Validators.pattern(/^\d{4}$/), Validators.maxLength(4), Validators.required]),
      nomeCartao: new FormControl(null, Validators.required),
      dataFechamento: new FormControl(null, Validators.required)
    });
  }

  cadastrarCartao(): void {
    if("VALID" == this.formularioCadastroCartao.status){
      console.log("ok");
    }
  }
}
