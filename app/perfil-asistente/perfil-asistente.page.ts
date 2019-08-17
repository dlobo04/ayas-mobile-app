import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-asistente',
  templateUrl: './perfil-asistente.page.html',
  styleUrls: ['./perfil-asistente.page.scss'],
})
export class PerfilAsistentePage implements OnInit {

div = {
    divPerfil: false, 
    divFormacion: true
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarFoto(event)
  {
    event.preventDefault();
		let element: HTMLElement = document.getElementById('fileLoader') as HTMLElement;
		element.click();
  }

  //Click Atras
  atras()
  {
    this.router.navigateByUrl('/panel-asistente')
  }

  //Agregar Direccion
  agregarFormacion()
  {
    alert( "Definir los campos que se requieren" )
  }

  //Agregar Familia
  agregarFamilia()
  {
    this.router.navigateByUrl('/agregar-familia')
  }

  //Agregar Familia
  modificar()
  {
    this.router.navigateByUrl('/panel-asistente')
  }

  //Opciones
  menuOpcion( auxOpcion )
  {
    console.log( auxOpcion )
    if ( auxOpcion == "perfil" )
    {
      this.div.divPerfil = false
      this.div.divFormacion = true
    }

    if ( auxOpcion == "formacion" )
    {
      this.div.divPerfil = true
      this.div.divFormacion = false
    }
    
  }

}
