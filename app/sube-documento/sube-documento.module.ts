import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubeDocumentoPage } from './sube-documento.page';

const routes: Routes = [
  {
    path: '',
    component: SubeDocumentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubeDocumentoPage]
})
export class SubeDocumentoPageModule {}
