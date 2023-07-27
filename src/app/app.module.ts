import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarCartaoComponent } from './components/cartao/cadastrar-cartao/cadastrar-cartao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalharCartaoComponent } from './components/cartao/detalhar-cartao/detalhar-cartao.component';
import { DeletarCartaoComponent } from './components/cartao/deletar-cartao/deletar-cartao.component';
import { HttpClientModule } from '@angular/common/http';


import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

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
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
