import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeleccionarTipoPage } from './seleccionar-tipo.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarTipoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeleccionarTipoPage]
})
export class SeleccionarTipoPageModule {}
