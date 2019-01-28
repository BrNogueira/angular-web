import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCarrouselComponent } from './componentes/home/home-carrousel/home-carrousel.component';
import { ManterGaleriaComponent } from './componentes/galeria/manter-galeria/manter-galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCarrouselComponent,
    ManterGaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
