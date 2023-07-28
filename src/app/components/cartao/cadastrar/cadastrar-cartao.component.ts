import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';

@Component({
  selector: 'cadastrar-cartao',
  templateUrl: './cadastrar-cartao.component.html',
  styleUrls: ['./cadastrar-cartao.component.css']
})
export class CadastrarCartaoComponent {

  formularioCadastroCartao!: FormGroup;


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
      let cadastroCartao = {
        "codigo": this.formularioCadastroCartao.get("codigoCartao")?.value,
        "nome": this.formularioCadastroCartao.get("nomeCartao")?.value,
        "data_fechamento": this.formularioCadastroCartao.get("dataFechamento")?.value,
        "manager": {
          "id": 1
        }
      }
      this.cartaoService.cadastrarCartao(cadastroCartao).subscribe(response => {
        console.log(response);
        this.router.navigate(['/']);
        console.log("ok");
      });
    }
  }
}
