import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Subject, Subscription, catchError } from 'rxjs';
import { UsuarioCadastro } from 'src/app/models/usuario/usuario-cadastro';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent{

  usuarioCadastroSucesso: boolean = false;
  exibirCard: boolean = true;
  tempo: number = 3;
  formularioCadastroUsuario!: FormGroup;

  error$ = new Subject<boolean>();
  subscription$!: Subscription;

  cadastroUsuarioRequest: UsuarioCadastro = {
    nome: '',
    telefone: '',
    manager: {
      id: 1
    }
  }

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formularioCadastroUsuario = new FormGroup({
      nomeUsuario: new FormControl(null, Validators.required),
      telefoneUsuario: new FormControl(null)
    });
  }

  cadastrarUsuario(): void {
    if("VALID" == this.formularioCadastroUsuario.status) {
      this.exibirCard = false;

      this.cadastroUsuarioRequest.nome = this.formularioCadastroUsuario.get("nomeUsuario")?.value;
      this.cadastroUsuarioRequest.telefone = this.formularioCadastroUsuario.get("telefoneUsuario")?.value;

      this.subscription$ = this.usuarioService.cadastrarUsuario(this.cadastroUsuarioRequest)
        .pipe(
          catchError(error => {
            this.error$.next(true);
            return EMPTY;
          })
        )
        .subscribe({
          next: response => {
            this.usuarioCadastroSucesso = true;
            if(this.usuarioCadastroSucesso){
              let myinterval = setInterval(() => {
                this.tempo = this.tempo - 1
                if(this.tempo === 0) {
                  clearInterval(myinterval);
                  this.onCarregarHome();
                }
              },600);
            }
          }
        })
    }
  }

  onCarregarHome(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if(this.subscription$ != undefined){
      this.subscription$.unsubscribe();
    }
  }

}
