import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarCartaoComponent } from './components/cartao/cadastrar-cartao/cadastrar-cartao.component';
import { DetalharCartaoComponent } from './components/cartao/detalhar-cartao/detalhar-cartao.component';
import { DeletarCartaoComponent } from './components/cartao/deletar-cartao/deletar-cartao.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhe-usuario/detalhe-usuario/detalhe-usuario.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';

  const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'cadastro-cartao', component: CadastrarCartaoComponent },
    { path: 'detalhe-cartao/:codigo_cartao', component: DetalharCartaoComponent },
    { path: 'delete-cartao/:codigo_cartao', component: DeletarCartaoComponent },
    { path: 'detalheUsuario/:id', component: DetalheUsuarioComponent },
    { path: 'cadastrarUsuario', component: CadastroUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
