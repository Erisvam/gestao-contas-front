import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario/usuario';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios: Usuario[] = []

  constructor(private usuarioService: UsuarioService){
    this.usuarioService.listarUsuarios().subscribe(response => this.usuarios = response);
  }

}
