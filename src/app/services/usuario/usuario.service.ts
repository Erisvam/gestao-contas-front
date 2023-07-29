import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioCadastro } from 'src/app/models/usuario/usuario-cadastro';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  readonly uriBase: string = 'http://localhost:8080';

  path = {
    "listarUsuarios": "/usuarios",
    "cadastrarUsuario": "/usuarios",
    "detalharUsuario": "/usuarios/:id"
  }

  constructor(private httpClient: HttpClient){}

  listarUsuarios(): Observable<Usuario[]>{
    let rotaListaUsuarios = this.uriBase.concat(this.path.listarUsuarios);
    return this.httpClient.get<Usuario[]>(rotaListaUsuarios);
  }

  cadastrarUsuario(usuarioRequest: UsuarioCadastro): Observable<any> {
    let rotaCadastrarUsuario = this.uriBase.concat(this.path.cadastrarUsuario);
    return this.httpClient.post<any>(rotaCadastrarUsuario, usuarioRequest);
  }

  detalharUsuario(id: string): Observable<any> {
    let rotaDetalheUsuario = this.uriBase.concat(this.path.detalharUsuario.replace(":id", id));
    return this.httpClient.get<any>(rotaDetalheUsuario);
  }
}
