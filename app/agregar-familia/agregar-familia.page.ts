import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-familia',
  templateUrl: './agregar-familia.page.html',
  styleUrls: ['./agregar-familia.page.scss'],
})
export class AgregarFamiliaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardar()
  {
    this.router.navigateByUrl('/perfil-padre')
  }

  //Volver
  volver()
  {
    this.router.navigateByUrl('/perfil-padre')
  }
}
