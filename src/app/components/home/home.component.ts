import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Cartao } from 'src/app/models/cartao/cartao.interface';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios: Usuario[] = []
  Cartao: Cartao[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private cartaoService: CartaoService){
      this.listarCartao();
      this.usuarioService.listarUsuarios().subscribe(response => this.usuarios = response);
  }

  listarCartao(): void {
    this.cartaoService.listarCartao().subscribe(response => this.Cartao = response);
  }
}
