import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Subject, Subscription, catchError } from 'rxjs';
import { Divida } from 'src/app/models/divida/divida';
import { DividaService } from 'src/app/services/divida/divida.service';

@Component({
  selector: 'cadastro-divida',
  templateUrl: './cadastro-divida.component.html',
  styleUrls: ['./cadastro-divida.component.css']
})
export class CadastroDividaComponent {

  dividaCadastroSucesso: boolean = false;
  exibirCard: boolean = true;
  tempo: number = 3;
  formularioCadastroDivida!: FormGroup;

  error$ = new Subject<boolean>();
  subscription$!: Subscription;

  divida: Divida = {
    codigo_cartao: '',
    nome_banco: '',
    valor_compra: 0,
    data_compra: '',
    descricao_compra: '',
    parcela:0
  }

  constructor(private dividaService: DividaService,
    private router: Router) {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formularioCadastroDivida = new FormGroup({
      cartao: new FormControl(null, Validators.required),
      data: new FormControl(null, Validators.required),
      valor: new FormControl(null, Validators.required),
      descricao: new FormControl(null),
      parcela: new FormControl(null)
    });
  }

  cadastrarDivida(){
    if("VALID" == this.formularioCadastroDivida.status){
      console.log("entrou no if")
      this.exibirCard = false;

      this.divida.codigo_cartao=this.formularioCadastroDivida.get('cartao')?.value;
      this.divida.nome_banco=this.formularioCadastroDivida.get('cartao')?.value;
      this.divida.data_compra=this.formularioCadastroDivida.get('data')?.value;
      this.divida.valor_compra=this.formularioCadastroDivida.get('valor')?.value;
      this.divida.descricao_compra=this.formularioCadastroDivida.get('descricao')?.value;
      this.divida.parcela=this.formularioCadastroDivida.get('parcela')?.value;

      console.log(this.divida)

      this.subscription$ = this.dividaService.cadastrarDivida(this.divida)
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return EMPTY;
        })
      )
      .subscribe({
        next: response => this.dividaCadastroSucesso = true
      });
    }else{
      
    }

  }

}
