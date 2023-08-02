import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RotaApi } from 'src/app/models/commons/rota-api.model';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioCadastro } from 'src/app/models/usuario/usuario-cadastro';
import { UsuarioDetalhe } from 'src/app/models/usuario/usuario-detalhe';
import {usuarioResponse} from "../../models/usuario/usuario-response.interface";


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  rotaApi: RotaApi = new RotaApi();

  constructor(private httpClient: HttpClient){}

  listarUsuarios(): Observable<usuarioResponse>{
    return this.httpClient.get<usuarioResponse>(this.rotaApi.getRotaUsuarios());
  }

  cadastrarUsuario(usuarioRequest: UsuarioCadastro): Observable<any> {
    return this.httpClient.post<any>(this.rotaApi.getRotaUsuarios(), usuarioRequest);
  }

  detalharUsuario(id: string): Observable<UsuarioDetalhe> {
    return this.httpClient.get<UsuarioDetalhe>(this.rotaApi.getRotaUsuarios(id));
  }
}
