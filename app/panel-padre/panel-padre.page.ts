import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panel-padre',
  templateUrl: './panel-padre.page.html',
  styleUrls: ['./panel-padre.page.scss'],
})
export class PanelPadrePage implements OnInit {

  constructor(private menu: MenuController, private router: Router) 
  {

  }

  ngOnInit() {
  }

  //Click en Ver Detalle
  verDetalle()
  {
    alert( "Muy pronto" )
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
    this.router.navigateByUrl('/perfil-padre')
  }

  cerrarSesion()
  {
    this.menu.toggle("menuPrincipal");
    this.router.navigateByUrl('/home')
  }

  //Sugerencias
  sugerencias()
  {
    alert( "Muy pronto" )
  }

  //Contratar Asistente Infantil
  contratar()
  {
    this.router.navigateByUrl('/busqueda-paso0')
  }

  //Abrir Menu Principal
  abrirMenu()
  {
    console.log( "Abriendo Menu" );
    this.menu.enable( true, "menuPrincipal" );
    this.menu.toggle("menuPrincipal");
  }

}
