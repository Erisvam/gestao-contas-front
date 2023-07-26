import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCartaoComponent } from './components/cadastrar-cartao/cadastrar-cartao.component';
import { HomeComponent } from './components/home/home.component';
import { DetalharCartaoComponent } from './components/detalhar-cartao/detalhar-cartao.component';
import { DeletarCartaoComponent } from './components/deletar-cartao/deletar-cartao.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cadastro-cartao', component: CadastrarCartaoComponent },
  { path: 'detalhe-cartao/:codigo_cartao', component: DetalharCartaoComponent },
  { path: 'delete-cartao/:codigo_cartao', component: DeletarCartaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
