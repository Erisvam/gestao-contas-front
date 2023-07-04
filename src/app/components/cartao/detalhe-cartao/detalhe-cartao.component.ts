import { Component, Input } from '@angular/core';
import { Cartao } from 'src/app/model/cartao';

@Component({
  selector: 'app-detalhe-cartao',
  templateUrl: './detalhe-cartao.component.html',
  styleUrls: ['./detalhe-cartao.component.css']
})
export class DetalheCartaoComponent {

  // /^\d{4}$/

  @Input()
  cartao?: Cartao;

  isUsuarios: boolean = false;

  ngOnInit(): void {
    if(this.cartao?.usuarios?.length != undefined && this.cartao?.usuarios?.length > 0){
      this.isUsuarios = true;
    }
  }
}
