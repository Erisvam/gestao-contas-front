import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import { ConsultaCartao } from 'src/app/models/cartao/consulta-cartao.interface';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';

@Component({
  selector: 'detalhar-cartao',
  templateUrl: './detalhar-cartao.component.html',
  styleUrls: ['./detalhar-cartao.component.css']
})
export class DetalharCartaoComponent {

  codigoCartao: string;

  cartao$!: Observable<ConsultaCartao>;
  error$ = new Subject<boolean>();

  constructor(
    private activeRouter: ActivatedRoute,
    private cartaoService: CartaoService
    ){
      this.codigoCartao = this.activeRouter.snapshot.paramMap.get('codigo_cartao')!;
      this.consutarCartao();
    }

    consutarCartao(): void {
    this.cartao$ = this.cartaoService.consultarCartao(this.codigoCartao)
      .pipe(
        catchError(error => {
          this.error$?.next(true);
          return EMPTY;
        })
      );
  }

  onCarregarNovamente(): void {
    this.consutarCartao();
    this.error$.next(true);
  }

  ngOnDestroy(){}

}
