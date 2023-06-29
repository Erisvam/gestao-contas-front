import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheCartaoComponent } from './components/cartao/detalhe-cartao/detalhe-cartao.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'detalhe-cartao/:codigo', component: DetalheCartaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
