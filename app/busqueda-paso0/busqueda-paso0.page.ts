import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-paso0',
  templateUrl: './busqueda-paso0.page.html',
  styleUrls: ['./busqueda-paso0.page.scss'],
})
export class BusquedaPaso0Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver()
  {
    this.router.navigateByUrl('/panel-padre')
  }

}
