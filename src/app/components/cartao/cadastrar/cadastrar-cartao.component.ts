import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroCartaoRequest } from 'src/app/models/cartao/cadastro-cartao.interface';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';
import { catchError, EMPTY, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'cadastrar-cartao',
  templateUrl: './cadastrar-cartao.component.html',
  styleUrls: ['./cadastrar-cartao.component.css']
})
export class CadastrarCartaoComponent {

  error$ = new Subject<boolean>();
  subscription$!: Subscription;

  cartaoCadastradoSucesso: boolean = false;
  tempo: number = 3;
  exibirCard: boolean = true;

  formularioCadastroCartao!: FormGroup;

  cadastroCartaoRequest: CadastroCartaoRequest = {
    manager: {
      id: 1
    },
    codigo: '',
    nome: '',
    data_fechamento: '',
    valor_total: 0
  };

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
      this.exibirCard = false;

      this.cadastroCartaoRequest.codigo = this.formularioCadastroCartao.get("codigoCartao")?.value;
      this.cadastroCartaoRequest.nome = this.formularioCadastroCartao.get("nomeCartao")?.value;
      this.cadastroCartaoRequest.data_fechamento = this.formularioCadastroCartao.get("dataFechamento")?.value;
      this.cadastroCartaoRequest.manager.id = 1

      this.subscription$ = this.cartaoService.cadastrarCartao(this.cadastroCartaoRequest)
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return EMPTY;
        })
      )
      .subscribe({
        next: response => this.cartaoCadastradoSucesso = true
      });
    }
  }

  onCarregarHome(): void {
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if(this.subscription$ != undefined){
      this.subscription$.unsubscribe();
    }
  }
}
