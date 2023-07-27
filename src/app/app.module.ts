import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroCartaoComponent } from './components/cartao/cadastro-cartao/cadastro-cartao.component';
import { DetalheCartaoComponent } from './components/cartao/detalhe-cartao/detalhe-cartao.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModalGenericoComponent } from './components/generico/ng-modal-generico/ng-modal-generico.component';
import { DeleteCartaoComponent } from './components/cartao/delete-cartao/delete-cartao.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CadastroUsuarioComponent } from './components/usuario/cadastro-usuario/cadastro-usuario.component';
import { AlertaComponent } from './components/generico/alerta/alerta.component';
import { DetalheUsuarioComponent } from './components/usuario/detalhe-usuario/detalhe-usuario/detalhe-usuario.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroCartaoComponent,
    DetalheCartaoComponent,
    NgModalGenericoComponent,
    DeleteCartaoComponent,
    CadastroUsuarioComponent,
    AlertaComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
