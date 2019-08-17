import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistente',
  templateUrl: './registro-asistente.page.html',
  styleUrls: ['./registro-asistente.page.scss'],
})
export class RegistroAsistentePage implements OnInit {

  form = {
    cbTerminos : false, 
    txbFecha: "2001-01-01"
  }

  constructor(private router: Router, private alertController:AlertController) { }

  ngOnInit() {
    this.form.txbFecha = "2001-01-01"
  }

  //Click en Siguiente
  siguiente()
  {
    if ( this.form.cbTerminos )
    {
      //Redireccionando
      this.router.navigateByUrl('/registro-asistente-acceso')
    }
    else
    {
      //No chekeado
      this.mostrarMensaje( "Debes aceptar los Terminos y Condiciones para continuar" )
    }
  }

  //Mostrar Mensaje
  async mostrarMensaje( auxMensaje ) {
    const alert = await this.alertController.create({
      header: "Ayas Mitaí",
      message: auxMensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

 //Volver al Login
  volver()
  {
    this.router.navigateByUrl('/login')
  }

  abrirTerminos()
  {
    this.router.navigateByUrl('/terminos-condiciones')
  }
}
