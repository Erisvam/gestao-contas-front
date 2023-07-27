import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaCartao } from 'src/app/models/cartao/consulta-cartao.interface';
import { ListarCartaoService } from 'src/app/services/cartao/listar-cartao.service';

@Component({
  selector: 'detalhar-cartao',
  templateUrl: './detalhar-cartao.component.html',
  styleUrls: ['./detalhar-cartao.component.css']
})
export class DetalharCartaoComponent {

  isUsuarios: boolean = false;

  cartao?: ConsultaCartao;

  constructor(
    private activeRouter: ActivatedRoute,
    private consultarCartaoService: ListarCartaoService
    ){
    let codigoCartao = this.activeRouter.snapshot.paramMap.get('codigo_cartao');
    this.consultarCartaoService.consultarCartao(codigoCartao!).subscribe(response => {
      this.cartao = response;
      this.isUsuarios = this.cartao?.usuarios.length != 0 ? true : false;
    });
  }

}
