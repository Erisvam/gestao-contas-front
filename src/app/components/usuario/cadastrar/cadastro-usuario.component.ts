import { Component } from '@angular/core';
import { UsuarioCadastro } from 'src/app/models/usuario/usuario-cadastro';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent{

  usuario: UsuarioCadastro = {
    nome: "",
    telefone: ""
  }

  campoNome: boolean = false ;
  campoTelefone: boolean = false ;
  mensagemErro: boolean = false ;
  mensagemSucesso: boolean = false ;

  constructor(private usuarioService: UsuarioService){
    this.usuario.nome=""
    this.usuario.telefone=""
  }
  limparCampos():void{
    this.usuario.nome=""
    this.usuario.telefone=""
  }

  salvarUsuario(): void{
    if(this.validaCampos()){
      this.usuarioService.cadastrarUsuario(this.usuario).subscribe(()=> {
        this.retornoAPIVisual(true)
        let btnCadastrarUsuario = document.getElementById("btnCadastrarUsuario");
        btnCadastrarUsuario?.setAttribute("data-bs-dismiss", "modal");
        btnCadastrarUsuario?.click();
      },
      (error: any) => this.retornoAPIVisual(false));
    }
  }
  retornoAPIVisual(sucesso:boolean):void{
    if(sucesso){
      this.limparCampos()
      this.mensagemSucesso=true
      this.mensagemErro=false
    }else{
      this.mensagemSucesso=false
      this.mensagemErro=true
    }
  }

  validaCampos(): boolean{
    if(this.usuario.nome==""){
      this.campoNome=true;
    }else{
      this.campoNome=false;
    }
    if(this.usuario.telefone==""){
      this.campoTelefone=true;
    }else{
      this.campoTelefone=false;
    }
    return !(this.campoNome || this.campoTelefone);
  }

}
