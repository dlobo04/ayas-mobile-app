import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-direccion',
  templateUrl: './agregar-direccion.page.html',
  styleUrls: ['./agregar-direccion.page.scss'],
})
export class AgregarDireccionPage implements OnInit {

  constructor(private router: Router) { }

  //Click Guardar
  guardar()
  {
    this.router.navigateByUrl('/perfil-padre')
  }

  //Volver
  volver()
  {
    this.router.navigateByUrl('/perfil-padre')
  }

  ngOnInit() {
  }

}
