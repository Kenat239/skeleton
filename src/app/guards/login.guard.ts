import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private userS: UsuarioService,
    private router: Router
  ) {
  }

  canActivate() {

    if (this.userS.estaLogueado()) {
    console.log('paso Guard');
    return true;
    }  else {
      console.log('bloqueado por el Guard');
      this.router.navigate(['/login']);
      return false;
      }
  }



}
