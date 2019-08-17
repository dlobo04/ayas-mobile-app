import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusquedaPaso12Page } from './busqueda-paso12.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaPaso12Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusquedaPaso12Page]
})
export class BusquedaPaso12PageModule {}
