import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  //Variables
  form = {
    txbUsuario: "",
    txbPassword: ""
  }

  ngOnInit() {
  }

  //Click volver
  volver()
  {
    this.router.navigateByUrl('/home')
  }

  //Registro del Padre
  registroPadre()
  {
    if (localStorage.getItem("tipo") == "padre")
    {
      //Navegar al Registro de Padre
      this.router.navigateByUrl( "/registro-padre" )
    }
    else
    {
      //Navegar al Registro de Asistente
      this.router.navigateByUrl( "/registro-asistente" )
    }
    
  }

  //Iniciar Sesion
  iniciarSesion()
  {
    if (localStorage.getItem("tipo") == "padre")
    {
      //Panel Papa
      this.router.navigateByUrl( "/panel-padre" )
    }
    else
    {
      //Panel Asistente
      this.router.navigateByUrl( "/panel-asistente" )
    }
  }

}
