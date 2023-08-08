import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarCartaoComponent } from './components/cartao/cadastrar/cadastrar-cartao.component';
import { DetalharCartaoComponent } from './components/cartao/detalhar/detalhar-cartao.component';
import { DeletarCartaoComponent } from './components/cartao/deletar/deletar-cartao.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastrar/cadastro-usuario.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhar/detalhe-usuario.component';
import { LoginComponent } from './components/login/login/login.component';

  const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cadastro-cartao', component: CadastrarCartaoComponent },
    { path: 'detalhe-cartao/:codigo_cartao', component: DetalharCartaoComponent },
    { path: 'delete-cartao/:codigo_cartao', component: DeletarCartaoComponent },
    { path: 'detalhe-usuario/:id', component: DetalheUsuarioComponent },
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
