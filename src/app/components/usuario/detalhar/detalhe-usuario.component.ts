import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EMPTY, Observable, Subject, catchError, tap} from 'rxjs';
import { UsuarioDetalhe } from 'src/app/models/usuario/usuario-detalhe';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css'],
})
export class DetalheUsuarioComponent {
  idUsuario!: string;

  usuario$!: Observable<UsuarioDetalhe>;
  error$ = new Subject<boolean>();

  constructor(
    private activeRouter: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    this.idUsuario = this.activeRouter.snapshot.paramMap.get('id')!;
    this.consultarUsuario();
  }

  consultarUsuario(): void {
    this.usuario$ = this.usuarioService.detalharUsuario(this.idUsuario)
    .pipe(
      tap(resp => console.log(resp)),
      catchError(error => {
        this.error$?.next(true);
        return EMPTY;
      })
    );
  }

  onRecarregarUsuario(): void {
    this.consultarUsuario();
    this.error$.next(false);
  }
}
