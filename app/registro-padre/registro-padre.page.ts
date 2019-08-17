import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { MensajeJSON } from '../servicios/registro-padre';*/
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-padre',
  templateUrl: './registro-padre.page.html',
  styleUrls: ['./registro-padre.page.scss'],
})

export class RegistroPadrePage implements OnInit {

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
    txbRePassword: "", 
    txbFecha: "2001-01-01"
  }

  //URL
  public baseURL = "http://localhost:8080/AyasApp/API.php?call=RU";

  //Loading
  private loading: any

  //constructor(public objMS: MensajeService) { }
  constructor(private router: Router, private http:HttpClient, private alertController:AlertController, private loadingController: LoadingController) 
  {
    
  }

  ngOnInit() {
    this.form.txbFecha = "2001-01-01"
  }

  //Volver al Login
  volver()
  {
    this.router.navigateByUrl('/login')
  }

  //Validar Datos del Formulario
  validarDatos()
  {
    let auxMensaje = "";

    //Password
    if ( this.form.txbPassword != this.form.txbRePassword )
    {
      auxMensaje += "- El <strong>PASSWORD</strong> no coincide <br />"
    }

    //Datos Minimos
    if ( this.form.txbNombre == "" )
    {
      auxMensaje += "- Campo <strong>NOMBRE</strong> es obligatorio <br />"
    }

    //Email
    if ( this.form.txbEmail == "" )
    {
      auxMensaje += "- Campo <strong>EMAIL</strong> es obligatorio <br />"
    }

    //Email
    if ( this.form.txbUsuario == "" )
    {
      auxMensaje += "- Campo <strong>USUARIO</strong> es obligatorio <br />"
    }

    //Password
    if ( this.form.txbPassword == "" )
    {
      auxMensaje += "- Campo <strong>PASSWORD</strong> es obligatorio"
    }

    return auxMensaje
  }

  //Registrarse
  async registro()
  {
    //Guardando datos
    localStorage.setItem( "auxEmail", this.form.txbEmail )
    localStorage.setItem( "auxNombre", this.form.txbNombre )

    //Ir a Validar Mail
    this.router.navigateByUrl('/confirmar-email')

    /*
    //Variable
    let auxValido = true

    //Datos
    let auxDatos = ""
    auxDatos = auxDatos + "&p0=" + this.form.txbNombre
    auxDatos = auxDatos + "&p1=" + this.form.txbTelefono
    auxDatos = auxDatos + "&p2=" + this.form.txbEmail
    auxDatos = auxDatos + "&p3=" + this.form.txbOcupacion
    auxDatos = auxDatos + "&p4=" + this.form.txbUsuario
    auxDatos = auxDatos + "&p5=" + this.form.txbPassword

    //Validando Datos
    let auxMensaje = this.validarDatos()
    if ( auxMensaje != "" )
    {
      this.mostrarMensaje( auxMensaje )
      auxValido = false
    }

    //Verificando Valido
    if ( auxValido )    
    {
      //Mostrar Loading
      this.loading = await this.loadingController.create({
        message: 'Por favor espere'
      });
      await this.loading.present();

      //Ejecutar Llamada
      this.http.get<MensajeJSON>( this.baseURL + auxDatos )
                .subscribe( data => {
                  this.loading.dismiss()
                  this.mostrarMensaje( data.mensaje )
                }, 
                err => {
                  this.loading.dismiss();
                  this.mostrarMensaje( "Ha ocurrido un error" )
                } )
    }
    */
  }

  //Mostrar Mensaje
  async mostrarMensaje( auxMensaje ) {
    const alert = await this.alertController.create({
      header: "Ayas App",
      message: auxMensaje,
      buttons: ['OK']
    });

    await alert.present();
  } 
}
