import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { CreditosComponent } from './creditos/creditos.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { RepartoComponent } from './reparto/reparto.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'favoritos', component: FavoritasComponent },
  { path: 'creditos', component: CreditosComponent },
  { path: 'reparto', component: RepartoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}