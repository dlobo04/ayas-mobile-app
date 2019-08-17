import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizard-asistente',
  templateUrl: './wizard-asistente.page.html',
  styleUrls: ['./wizard-asistente.page.scss'],
})
export class WizardAsistentePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Click en Descartar
  descartar()
  {
    this.router.navigateByUrl('/panel-asistente')
  }

  //Subir Documento
  subirDocumento( tipo )
  {
    if (tipo == "ci")
    {
      localStorage.setItem( "tipoDocumento", "ci" )

      //Direccionar a subir Documento
      this.router.navigateByUrl('/sube-documento')
    }

    if (tipo == "antecedentes")
    {
      localStorage.setItem( "tipoDocumento", "antecedentes" )

      //Direccionar a subir Documento
      this.router.navigateByUrl('/sube-documento')
    }

    if (tipo == "examen")
    {
      alert("No definido")
    }

    if (tipo == "capacitacion")
    {
      alert("No definido")
    }
  }

}
