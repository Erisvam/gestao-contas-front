import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { Cartao } from 'src/app/models/cartao/cartao.interface';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios: Usuario[] = [];

  cartoes$!: Observable<Cartao[]>;
  errorCartoes$ = new Subject<boolean>();
  errorUsuarios$ = new Subject<boolean>();

  usuarios$!: Observable<Usuario[]>;

  constructor(
    private usuarioService: UsuarioService,
    private cartaoService: CartaoService){
      this.listarCartao();
      this.listarUsuarios();
    }

    listarCartao(): void {
      this.cartoes$ = this.cartaoService.listarCartao()
        .pipe(
          catchError(error => {
            this.errorCartoes$.next(true);
            return EMPTY;
          })
        );
    }

    listarUsuarios(): void {
      this.usuarios$ = this.usuarioService.listarUsuarios()
      .pipe(
        catchError(error => {
          this.errorUsuarios$.next(true);
          return EMPTY;
        })
      );
    }

    onCarregarCartoes(): void {
      this.listarCartao();
      this.errorCartoes$.next(false);
    }

    onCarregarUsuarios(): void {
      this.listarUsuarios();
      this.errorUsuarios$.next(false);
    }
}
