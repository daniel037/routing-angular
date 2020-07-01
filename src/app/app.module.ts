import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrimerComponent } from './primer/primer.component';
import { SegundoComponent } from './segundo/segundo.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoAComponent } from './producto-a/producto-a.component';
import { ProductoBComponent } from './producto-b/producto-b.component';
import { ProductoCComponent } from './producto-c/producto-c.component';
import { CompraComponent } from './compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PrimerComponent,
    SegundoComponent,
    InicioComponent,
    ProductoAComponent,
    ProductoBComponent,
    ProductoCComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
