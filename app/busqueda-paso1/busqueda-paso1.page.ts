import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-paso1',
  templateUrl: './busqueda-paso1.page.html',
  styleUrls: ['./busqueda-paso1.page.scss'],
})
export class BusquedaPaso1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Volver
  volver()
  {
    this.router.navigateByUrl('/busqueda-paso0')
  }

  //Click Siguiente Boton
  siguiente()
  {
    this.router.navigateByUrl('/busqueda-paso12')
  }
}
