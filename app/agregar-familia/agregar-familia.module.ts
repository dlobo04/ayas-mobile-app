import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgregarFamiliaPage } from './agregar-familia.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarFamiliaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgregarFamiliaPage]
})
export class AgregarFamiliaPageModule {}
