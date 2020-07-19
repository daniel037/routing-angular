import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { RegistroComponent } from './registro/registro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductosComponent } from './productos/productos.component';
import { LibrosComponent } from './libros/libros.component';
import { RevistasComponent } from './revistas/revistas.component';
import { ComicsComponent } from './comics/comics.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InfoComponent,
    RegistroComponent,
    PageNotFoundComponent,
    ProductosComponent,
    LibrosComponent,
    RevistasComponent,
    ComicsComponent,
    LoginAdminComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
