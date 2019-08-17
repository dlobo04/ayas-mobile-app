import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-padre',
  templateUrl: './perfil-padre.page.html',
  styleUrls: ['./perfil-padre.page.scss'],
})
export class PerfilPadrePage implements OnInit {

  div = {
    divPerfil: false, 
    divFamilia: true, 
    divDireccion: true
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
    this.router.navigateByUrl('/panel-padre')
  }

  //Agregar Direccion
  agregarDireccion()
  {
    this.router.navigateByUrl('/agregar-direccion')
  }

  //Agregar Familia
  agregarFamilia()
  {
    this.router.navigateByUrl('/agregar-familia')
  }

  //Agregar Familia
  guardarPerfil()
  {
    this.router.navigateByUrl('/panel-padre')
  }

  //Opciones
  menuOpcion( auxOpcion )
  {
    console.log( auxOpcion )
    if ( auxOpcion == "perfil" )
    {
      this.div.divPerfil = false
      this.div.divDireccion = true
      this.div.divFamilia = true
    }

    if ( auxOpcion == "familia" )
    {
      this.div.divPerfil = true
      this.div.divDireccion = true
      this.div.divFamilia = false
    }
    
    if ( auxOpcion == "direccion" )
    {
      this.div.divPerfil = true
      this.div.divDireccion = false
      this.div.divFamilia = true
    }

    
  }

}
