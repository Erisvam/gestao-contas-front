import { Component } from '@angular/core';
import { Cartao } from 'src/app/model/cartao';
import { CartaoService } from 'src/app/service/cartao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cartoes: Cartao[] = [];

  constructor(cartaoService: CartaoService){
    cartaoService.listarCartoes().subscribe(response => this.cartoes = response);
  }
  
  ngAfterViewChecked():void {
    this.cartoes.forEach((cartao) => {
      document.querySelector(`#trId${cartao.codigo}`)?.setAttribute("data-bs-target", "#modalCartaoDetalhe"+cartao.codigo);
    })
  }
}
