import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sube-documento',
  templateUrl: './sube-documento.page.html',
  styleUrls: ['./sube-documento.page.scss'],
})
export class SubeDocumentoPage implements OnInit {

//Variables
  form = {
    tipoDocumento: "", 
    descripcionDocumento: "", 
    tipDocumento: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
    //CI
    if ( localStorage.getItem( "tipoDocumento" ) == "ci" )
    {
      this.form.tipoDocumento = "Carnet de Identidad"
      this.form.descripcionDocumento = "Es importante que subas tu documento de identidad vigente, una vez tengas la imagen de tu CI click en el botón a continuación para seleccionar el archivo"
      this.form.tipDocumento = "Si no tienes el documento de identidad vigente deberás visitar las oficinas del SEGIP en tu ciudad para renovarlo. El procedimiento toma aproximadamente 4 horas."
    }

    //Antecedentes
    if ( localStorage.getItem( "tipoDocumento" ) == "antecedentes" )
    {
      this.form.tipoDocumento = "Certificado de Antecedentes"
      this.form.descripcionDocumento = "Este documento es muy importante ya que nos permite una comunidad sólida y segura"
      this.form.tipDocumento = "El certificado de antecedentes puedes obtenerlo en oficinas de la FELCC de tu ciudad, el costo es de 30 Bs"
    }
  }

  
  //Volver al Login
  volver()
  {
    this.router.navigateByUrl('/wizard-asistente')
  }

}
