import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { AlertaComponent } from './components/generico/alerta/alerta.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhe-usuario/detalhe-usuario/detalhe-usuario.component';
import { CadastrarCartaoComponent } from './components/cartao/cadastrar-cartao/cadastrar-cartao.component';
import { DetalharCartaoComponent } from './components/cartao/detalhar-cartao/detalhar-cartao.component';
import { DeletarCartaoComponent } from './components/cartao/deletar-cartao/deletar-cartao.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertaComponent,
    CadastroUsuarioComponent,
    DetalheUsuarioComponent,
    CadastrarCartaoComponent,
    DetalharCartaoComponent,
    DeletarCartaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
