import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioCadastro } from 'src/app/model/usuario-cadastro';
import { UsuarioDetalhe } from 'src/app/model/usuario-detalhe';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private readonly webtargetOn: string = "http://localhost:8080/usuarios";
  private readonly webtarget: string = "../../assets/mock/usuarios.json";
  private readonly webtargetDetalhe: string = "../../assets/mock/usuarios/1.json";
  
  constructor(private httpClient: HttpClient) { }
  
  detalharUsuario(codigoUsuario:string | null) {
    return this.httpClient.get<UsuarioDetalhe>(this.webtargetOn+"/"+codigoUsuario);
  }

  cadastrarUsuario(usuario: UsuarioCadastro): Observable<UsuarioCadastro> {
    return this.httpClient.post<UsuarioCadastro>(this.webtargetOn, usuario);
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.webtarget);
  }
}
