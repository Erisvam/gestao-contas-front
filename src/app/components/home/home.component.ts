import { Component } from '@angular/core';
import { Cartoes } from 'src/app/models/cartao/cartoes.interface';
import { ListarCartaoService } from 'src/app/services/listar-cartao.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cartoes: Cartoes[] = [];

  constructor(private listarCartoesService: ListarCartaoService){
    this.listarCartoes();

  }

  listarCartoes(): void {
    this.listarCartoesService.listarCartoes().subscribe(response => {
      this.cartoes = response
    });
  }
}
