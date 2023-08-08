import { Component } from '@angular/core';
import { CartaoService } from 'src/app/services/cartao/cartao-service.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import {usuarioResponse} from "../../models/usuario/usuario-response.interface";
import {CartaoResponse} from "../../models/cartao/cartao-response-interface";
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios!: usuarioResponse;

  cartaoResponse$!: Observable<CartaoResponse>;
  errorCartoes$ = new Subject<boolean>();
  errorUsuarios$ = new Subject<boolean>();

  usuarioResponse$!: Observable<usuarioResponse>;

  constructor(
    private usuarioService: UsuarioService,
    private cartaoService: CartaoService){
      this.listarCartao();
      this.listarUsuarios();
    }

    listarCartao(): void {
      this.cartaoResponse$ = this.cartaoService.listarCartao()
        .pipe(
          catchError(error => {
            this.errorCartoes$.next(true);
            return EMPTY;
          })
        );
    }

    listarUsuarios(): void {
      this.usuarioResponse$ = this.usuarioService.listarUsuarios()
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

    ngOnDestroy(){}
}
