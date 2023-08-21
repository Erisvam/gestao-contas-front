import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroUsuarioComponent } from './components/usuario/cadastrar/cadastro-usuario.component';
import { CadastrarCartaoComponent } from './components/cartao/cadastrar/cadastrar-cartao.component';
import { DetalharCartaoComponent } from './components/cartao/detalhar/detalhar-cartao.component';
import { DeletarCartaoComponent } from './components/cartao/deletar/deletar-cartao.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AlertaComponent } from './components/generico/alerta/alerta.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhar/detalhe-usuario.component';
import { SpinnerComponent } from './components/generico/spinner/spinner.component';
import { ErroGenericoComponent } from './components/generico/erro-generico/erro-generico.component';
import { MensagemSucessoComponent } from './components/generico/mensagem-sucesso/mensagem-sucesso.component';
import { LoginComponent } from './components/login/login/login.component';
import { CadastroDividaComponent } from './components/divida/cadastrar/cadastro-divida/cadastro-divida.component';

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
    DeletarCartaoComponent,
    SpinnerComponent,
    ErroGenericoComponent,
    MensagemSucessoComponent,
    LoginComponent,
    CadastroDividaComponent
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
