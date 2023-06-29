import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartao } from 'src/app/model/cartao';
import { CartaoService } from 'src/app/service/cartao.service';

@Component({
  selector: 'app-detalhe-cartao',
  templateUrl: './detalhe-cartao.component.html',
  styleUrls: ['./detalhe-cartao.component.css']
})
export class DetalheCartaoComponent {

  codigoCartao: string = "";
  
  cartao?: Cartao;
  btnDeletarCard: any;

  constructor(private activatedRoute : ActivatedRoute, private cartaoService: CartaoService, private router: Router) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(path => {
      this.cartaoService.consultarCartao(path['codigo']).subscribe(response => this.cartao = response);
      this.btnDeletarCard = document.getElementById("btnDeletarCard");
    });
  }

  deletarCartao(): void {
    if(this.validarCodigoCartao()){
      this.cartaoService.deletarCartao(this.codigoCartao).subscribe(() => {
        this.btnDeletarCard?.setAttribute("data-bs-dismiss", "modal");
        this.btnDeletarCard?.click();
        this.router.navigate(['/'])
      });
    }
  }

  validarCodigoCartao(): Boolean {
    if(this.codigoCartao.match(/^\d{4}$/)){
      console.log(this.btnDeletarCard);
      this.btnDeletarCard?.removeAttribute("disabled");
      return true;
    }
    return false;
  }
}
