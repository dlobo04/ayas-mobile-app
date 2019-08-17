import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-asistente',
  templateUrl: './panel-asistente.page.html',
  styleUrls: ['./panel-asistente.page.scss'],
})
export class PanelAsistentePage implements OnInit {

  constructor(private menu: MenuController, private router: Router) { }

  ngOnInit() {
  }

  //Deshabilitar Menu
  inicio()
  {
    this.menu.toggle("menuPrincipal");
  }

  //Ir a Mi Perfil
  miPerfil()
  {
    this.menu.toggle("menuPrincipal");
    this.router.navigateByUrl('/perfil-asistente')
  }

  //Sugerencias
  sugerencias()
  {
    alert( "Muy pronto" )
  }

  cerrarSesion()
  {
    this.menu.toggle("menuPrincipal");
    this.router.navigateByUrl('/home')
  }

  //Abrir Menu Principal
  abrirMenu()
  {
    console.log( "Abriendo Menu" );
    this.menu.enable( true, "menuPrincipal" );
    this.menu.toggle("menuPrincipal");
  }

}
