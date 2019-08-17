import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroAsistenteAccesoPage } from './registro-asistente-acceso.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAsistenteAccesoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroAsistenteAccesoPage]
})
export class RegistroAsistenteAccesoPageModule {}
