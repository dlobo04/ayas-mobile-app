import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WizardAsistentePage } from './wizard-asistente.page';

const routes: Routes = [
  {
    path: '',
    component: WizardAsistentePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WizardAsistentePage]
})
export class WizardAsistentePageModule {}
