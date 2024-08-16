import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = true;//variable booleana para el boton de registro e inicio secion
  deslogueado = false;//variable booleana para el boton de cerrar secion
  constructor(
    public servicioAuth: AuthService,
    public serviseRutas: Router
  ) { }

  iniciar() {
    this.logueado = false;
    this.deslogueado = true;
  }

  cerrarSecion() {
    this.deslogueado = false
    //va a eliminar el "token" actual del usuario
    //token: estado actual del usuario en el navegador para mantener la secion abierta
    this.servicioAuth.cerrarSesion();

    this.serviseRutas.navigate(['/'])//redirigimos a la raiz de la pagina
    this.logueado=true;
  }
}
