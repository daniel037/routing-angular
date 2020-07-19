import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductosComponent } from './productos/productos.component';
import { LibrosComponent } from './libros/libros.component';
import { RevistasComponent } from './revistas/revistas.component';
import { ComicsComponent } from './comics/comics.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'informacion', component: InfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login_admin', component: LoginAdminComponent},
  {path: 'productos', component: ProductosComponent, children: [
    {path: 'libros', component: LibrosComponent},
    {path: 'revistas', component: RevistasComponent},
    {path: 'comics', component: ComicsComponent}
  ]},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
