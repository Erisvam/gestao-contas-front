import { Component, ViewChild } from '@angular/core';
import { Cartao } from 'src/app/model/cartao';
import { Usuario } from 'src/app/model/usuario';
import { CartaoService } from 'src/app/service/cartao.service';
import { CartaoService2 } from 'src/app/service/cartao.service2';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';
import { DetalheUsuarioComponent } from '../usuario/detalhe-usuario/detalhe-usuario/detalhe-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cartoes: Cartao[] = [];
  usuarios: Usuario[] = []

  constructor(private cartaoService: CartaoService2, private usuarioService: UsuarioService){
    this.cartaoService.listarCartoes().subscribe(response => this.cartoes = response);
    this.usuarioService.listarUsuarios().subscribe(response => this.usuarios = response)
  }

}
