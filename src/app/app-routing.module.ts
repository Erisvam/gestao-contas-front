import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhe-usuario/detalhe-usuario/detalhe-usuario.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'detalheUsuario/:id', component: DetalheUsuarioComponent, pathMatch: 'full' },
  { path: 'cadastrarUsuario', component: CadastroUsuarioComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
