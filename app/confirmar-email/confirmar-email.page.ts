import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar-email',
  templateUrl: './confirmar-email.page.html',
  styleUrls: ['./confirmar-email.page.scss'],
})
export class ConfirmarEmailPage implements OnInit {

  form = {
    email: ""
  }

  constructor(private router: Router) { }

  ngOnInit() 
  {
    //Escribiendo Valores
    this.form.email = localStorage.getItem( "auxEmail" )
  }

  //Confirmando Correo
  confirmarEmail()
  {
    if ( localStorage.getItem("tipo") == "padre" )
    {
      //Padre
      this.router.navigateByUrl('/panel-padre')
    }
    else
    {
      //Asistente
      this.router.navigateByUrl('/wizard-asistente')
    }
  }

}
