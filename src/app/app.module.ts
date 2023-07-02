import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroCartaoComponent,
    DetalheCartaoComponent,
    NgModalGenericoComponent,
    DeleteCartaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
