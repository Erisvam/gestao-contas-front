import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsuarioDetalhe } from 'src/app/models/usuario/usuario-detalhe';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent {

  codigoUsuario!: string ;
  usuario!: UsuarioDetalhe;


  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.codigoUsuario = params.get('id')!
    })
    this.carregaUsuario()
  }

  carregaUsuario(): void {
    this.usuarioService.detalharUsuario("1").subscribe(response => {
      this.usuario = response;
      console.log(this.usuario);
    })
  }

}
