import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-asistente-acceso',
  templateUrl: './registro-asistente-acceso.page.html',
  styleUrls: ['./registro-asistente-acceso.page.scss'],
})
export class RegistroAsistenteAccesoPage implements OnInit {

//Variables
  form = {
    txbNombre: "", 
    txbTelefono: "",
    txbNroHijos: "", 
    txbEmail: "", 
    txbOcupacion: "", 
    txbCodigo: "", 
    txbUsuario: "",
    txbPassword: "", 
    txbRePassword: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Volver al Login
  volver()
  {
    this.router.navigateByUrl('/registro-asistente')
  }

  //Click en Registro
  registro()
  {
    //Guardando datos
    localStorage.setItem( "auxEmail", this.form.txbEmail )
    
    //Validar Email
    this.router.navigateByUrl('/confirmar-email')
  }

}
