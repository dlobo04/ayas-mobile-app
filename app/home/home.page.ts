import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  //Navegar al Panel del Padre
  navegarLogin()
  {       
    localStorage.setItem( "tipo", "padre" )
    this.router.navigateByUrl( "/login" )
  } 

  //Navegar al Login
  navegarAsistente()
  {       
    localStorage.setItem( "tipo", "asistente" )
    this.router.navigateByUrl( "/login" )
  }  

}
