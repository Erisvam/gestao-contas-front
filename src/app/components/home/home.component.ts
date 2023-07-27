import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Cartoes } from 'src/app/models/cartao/cartoes.interface';
import { ListarCartaoService } from 'src/app/services/cartao/listar-cartao.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios: Usuario[] = []
  cartoes: Cartoes[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private listarCartoesService: ListarCartaoService){
      this.listarCartoes();
    this.usuarioService.listarUsuarios().subscribe(response => this.usuarios = response);
  }

  listarCartoes(): void {
    this.listarCartoesService.listarCartoes().subscribe(response => {
      this.cartoes = response
    });
  }
}
