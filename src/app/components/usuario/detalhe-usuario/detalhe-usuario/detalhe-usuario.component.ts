import { AfterViewInit,Component, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsuarioDetalhe } from 'src/app/models/usuario/usuario-detalhe';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent {



  codigoUsuario!: string | null;
  usuario!: UsuarioDetalhe;

  carregaUsuario(): void{
    debugger
    this.usuarioService.detalharUsuario(this.codigoUsuario).subscribe(response => this.usuario = response)
  }

  constructor(private route: ActivatedRoute,private usuarioService: UsuarioService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.codigoUsuario = params.get('id')
    })
    this.carregaUsuario()
  }

}
