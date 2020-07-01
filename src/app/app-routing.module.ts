import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimerComponent } from './primer/primer.component';
import { SegundoComponent } from './segundo/segundo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoAComponent } from './producto-a/producto-a.component';
import { ProductoBComponent } from './producto-b/producto-b.component';
import { ProductoCComponent } from './producto-c/producto-c.component';
import { CompraComponent } from './compra/compra.component';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'primer', component: PrimerComponent, children: [
    { path: 'producto-a', component: ProductoAComponent},
    { path: 'producto-b', component: ProductoBComponent},
    { path: 'producto-c', component: ProductoCComponent}  
  ] },
  { path: 'segundo', component: SegundoComponent },
  { path: 'compra', component: CompraComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
