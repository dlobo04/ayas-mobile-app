import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusquedaPaso0Page } from './busqueda-paso0.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaPaso0Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusquedaPaso0Page]
})
export class BusquedaPaso0PageModule {}
