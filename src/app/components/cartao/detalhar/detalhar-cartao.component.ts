import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConsultaCartao } from 'src/app/models/cartao/consulta-cartao.interface';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';

@Component({
  selector: 'detalhar-cartao',
  templateUrl: './detalhar-cartao.component.html',
  styleUrls: ['./detalhar-cartao.component.css']
})
export class DetalharCartaoComponent {

  isUsuarios: boolean = false;

  cartao$!: Observable<ConsultaCartao>;

  constructor(
    private activeRouter: ActivatedRoute,
    private cartaoService: CartaoService
    ){
    let codigoCartao = this.activeRouter.snapshot.paramMap.get('codigo_cartao');
    this.cartao$ = this.cartaoService.consultarCartao(codigoCartao!);
  }

}
