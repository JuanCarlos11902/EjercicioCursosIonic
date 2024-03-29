import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FormularioComponent } from '../formulario/formulario.component';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
    
  ],
  declarations: [HomePage,FormularioComponent,ListaAlumnosComponent]
})
export class HomePageModule {}
