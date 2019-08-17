import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusquedaPaso1Page } from './busqueda-paso1.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaPaso1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusquedaPaso1Page]
})
export class BusquedaPaso1PageModule {}
