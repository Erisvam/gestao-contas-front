import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroCartaoRequest } from 'src/app/models/cartao/cadastro-cartao.interface';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';

@Component({
  selector: 'cadastrar-cartao',
  templateUrl: './cadastrar-cartao.component.html',
  styleUrls: ['./cadastrar-cartao.component.css']
})
export class CadastrarCartaoComponent {

  formularioCadastroCartao!: FormGroup;
  cadastroCartaoRequest!: CadastroCartaoRequest;

  constructor(
    private cartaoService: CartaoService,
    private router: Router
    ){}

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

      this.cadastroCartaoRequest.codigo = this.formularioCadastroCartao.get("codigoCartao")?.value;
      this.cadastroCartaoRequest.nome = this.formularioCadastroCartao.get("nomeCartao")?.value;
      this.cadastroCartaoRequest.data_fechamento = this.formularioCadastroCartao.get("dataFechamento")?.value;
      this.cadastroCartaoRequest.manager.id = 1

      this.cartaoService.cadastrarCartao(this.cadastroCartaoRequest).subscribe(response => {
        console.log(response);
        this.router.navigate(['/']);
        console.log("ok");
      });
    }
  }
}
