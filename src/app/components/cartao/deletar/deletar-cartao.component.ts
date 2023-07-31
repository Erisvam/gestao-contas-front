import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject, catchError, Subscription } from 'rxjs';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';

@Component({
  selector: 'deletar-cartao',
  templateUrl: './deletar-cartao.component.html',
  styleUrls: ['./deletar-cartao.component.css']
})
export class DeletarCartaoComponent {

  nomeCartao?: string;
  codigoInputado!: string;
  codigoCartao?: string;
  habilitaBotao!: boolean;
  cartaoDeletadoSucesso: boolean = false;

  exibirCard: boolean = true;

  deleteCartao$ = new Observable<any>();
  error$ = new Subject<boolean>();
  tempo: number = 3;

  subscription$!: Subscription;

  constructor(
    private activeRouter: ActivatedRoute,
    private cartaoService: CartaoService,
    private router: Router
  ) {
    this.codigoCartao = this.activeRouter.snapshot.paramMap.get("codigo_cartao")!;
    this.nomeCartao = this.activeRouter.snapshot.queryParamMap.get("nome")!;
  }

  deletarCartao(): void {
    if(this.codigoInputado === this.codigoCartao){
      this.exibirCard = false;
      this.deleteCartao$ = this.cartaoService.deletarCartao(this.codigoCartao)
        .pipe(
          catchError(error => {
            this.error$.next(true);
            return EMPTY;
          })
        );

      this.subscription$ = this.deleteCartao$.subscribe({
        next: response =>  this.cartaoDeletadoSucesso = true
      });
    }
  }

  onCarregarHome(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    if(this.subscription$ != undefined){
      this.subscription$.unsubscribe();
    }
  }
}
