import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListarCartaoService } from 'src/app/services/cartao/listar-cartao.service';

@Component({
  selector: 'deletar-cartao',
  templateUrl: './deletar-cartao.component.html',
  styleUrls: ['./deletar-cartao.component.css']
})
export class DeletarCartaoComponent {

  nomeCartao?: string;
  codigoInputado!: string;
  codigoCartao?: string;
  // habilitaBotao: boolean = !false;

  constructor(
    private activeRouter: ActivatedRoute,
    private cartaoService: ListarCartaoService,
    private router: Router
  ) {
    this.codigoCartao = this.activeRouter.snapshot.paramMap.get("codigo_cartao")!;
    this.nomeCartao = this.activeRouter.snapshot.queryParamMap.get("nome")!;
  }

  deletarCartao(): void {
    if(this.codigoInputado === this.codigoCartao){
      this.cartaoService.deletarCartao(this.codigoCartao).subscribe(response => {
        console.log(response)
        this.router.navigate(['/']);
      });
      console.log("cartao deletado: ", this.codigoCartao);
    }
  }

}
