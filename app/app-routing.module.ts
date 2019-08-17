import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'panel-padre', loadChildren: './panel-padre/panel-padre.module#PanelPadrePageModule' },
  { path: 'seleccionar-tipo', loadChildren: './seleccionar-tipo/seleccionar-tipo.module#SeleccionarTipoPageModule' },
  { path: 'registro-padre', loadChildren: './registro-padre/registro-padre.module#RegistroPadrePageModule' },
  { path: 'confirmar-email', loadChildren: './confirmar-email/confirmar-email.module#ConfirmarEmailPageModule' },
  { path: 'perfil-padre', loadChildren: './perfil-padre/perfil-padre.module#PerfilPadrePageModule' },
  { path: 'agregar-direccion', loadChildren: './agregar-direccion/agregar-direccion.module#AgregarDireccionPageModule' },
  { path: 'agregar-familia', loadChildren: './agregar-familia/agregar-familia.module#AgregarFamiliaPageModule' },
  { path: 'registro-asistente', loadChildren: './registro-asistente/registro-asistente.module#RegistroAsistentePageModule' },
  { path: 'registro-asistente-acceso', loadChildren: './registro-asistente-acceso/registro-asistente-acceso.module#RegistroAsistenteAccesoPageModule' },
  { path: 'panel-asistente', loadChildren: './panel-asistente/panel-asistente.module#PanelAsistentePageModule' },
  { path: 'wizard-asistente', loadChildren: './wizard-asistente/wizard-asistente.module#WizardAsistentePageModule' },
  { path: 'sube-documento', loadChildren: './sube-documento/sube-documento.module#SubeDocumentoPageModule' },
  { path: 'terminos-condiciones', loadChildren: './terminos-condiciones/terminos-condiciones.module#TerminosCondicionesPageModule' },
  { path: 'perfil-asistente', loadChildren: './perfil-asistente/perfil-asistente.module#PerfilAsistentePageModule' },
  { path: 'busqueda-paso0', loadChildren: './busqueda-paso0/busqueda-paso0.module#BusquedaPaso0PageModule' },
  { path: 'busqueda-paso1', loadChildren: './busqueda-paso1/busqueda-paso1.module#BusquedaPaso1PageModule' },
  { path: 'busqueda-paso12', loadChildren: './busqueda-paso12/busqueda-paso12.module#BusquedaPaso12PageModule' },
  { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
