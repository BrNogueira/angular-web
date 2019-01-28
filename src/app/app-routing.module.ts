import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManterGaleriaComponent } from './componentes/galeria/manter-galeria/manter-galeria.component';
import { HomeCarrouselComponent } from './componentes/home/home-carrousel/home-carrousel.component';

const routes: Routes = [
  {path: 'home/home-carrousel', component: HomeCarrouselComponent},
  {path: 'galeria/manter-galeria/', component: ManterGaleriaComponent},
  {path: 'galeria/manter-galeria/:id', component: ManterGaleriaComponent},
  {path: '', component: HomeCarrouselComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
