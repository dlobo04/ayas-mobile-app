import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-tipo',
  templateUrl: './seleccionar-tipo.page.html',
  styleUrls: ['./seleccionar-tipo.page.scss'],
})
export class SeleccionarTipoPage implements OnInit {

  //Variables
  form = {
    rTipo: ""
  }

  constructor(private router: Router) {}

  ngOnInit() {
  }

  //Click Siguiente
  siguiente()
  {
    //Guardando variable Tipo
    localStorage.setItem( "tipo", this.form.rTipo )

    //Verificando Tipo
    if ( this.form.rTipo == "ai" )
    {
      alert("Registro de Asistente no Implementado")
    }
    else
    {
      //Registro de Padres
      this.router.navigateByUrl( "/registro-padre" );

    }
  }

}
