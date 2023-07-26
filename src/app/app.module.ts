import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarCartaoComponent } from './components/cadastrar-cartao/cadastrar-cartao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalharCartaoComponent } from './components/detalhar-cartao/detalhar-cartao.component';
import { DeletarCartaoComponent } from './components/deletar-cartao/deletar-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarCartaoComponent,
    DetalharCartaoComponent,
    DeletarCartaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
