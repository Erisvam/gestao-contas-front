import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Cartao } from 'src/app/models/cartao/cartao.interface';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios: Usuario[] = [];
  cartoes$!: Observable<Cartao[]>;

  constructor(
    private usuarioService: UsuarioService,
    private cartaoService: CartaoService){
      this.listarCartao();
      this.listarUsuarios();
    }

    listarCartao(): void {
      this.cartoes$ = this.cartaoService.listarCartao();
      console.log(this.cartoes$);

    }

    listarUsuarios(): void {
      this.usuarioService.listarUsuarios().subscribe(response => {
        this.usuarios = response;
        // console.log(this.usuarios);
      });
    }
}
