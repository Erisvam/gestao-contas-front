import { Component } from '@angular/core';
import { Cartao } from 'src/app/model/cartao';
import { CartaoService } from 'src/app/service/cartao.service';
import { CartaoService2 } from 'src/app/service/cartao.service2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cartoes: Cartao[] = [];

  constructor(private cartaoService: CartaoService2){
    this.cartaoService.listarCartoes().subscribe(response => this.cartoes = response);
  }

}
