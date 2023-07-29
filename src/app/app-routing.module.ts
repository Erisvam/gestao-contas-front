import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarCartaoComponent } from './components/cartao/cadastrar/cadastrar-cartao.component';
import { DetalharCartaoComponent } from './components/cartao/detalhar/detalhar-cartao.component';
import { DeletarCartaoComponent } from './components/cartao/deletar/deletar-cartao.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastrar/cadastro-usuario.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhar/detalhe-usuario.component';

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
