import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token: string = '';
  usuario:IUsuario
  email: string;
  password: string;

  constructor(
   private http: HTTP,
    private router: Router
  ) { }

  logueado (email: string, password: string) {
    const url= 'http://192.168.100.9:5002/chat/login';
    return this.http.post (url, {email: email, password: password},
     {observe: 'response'});
  }

  estaLogueado () {
    return (this.token.length > 3) ? true: false;
  }

  logout () {
    this.token = '1';
    this.router.navigate (['/login']);
  }

  registro (nombre: string, apellido: string, email: string, password: string) {
    const url= 'http://192.168.100.9:5002/chat/registrar'
    return this.http.post (url, {nombre: nombre, apellido: apellido, email: email, password: password},
      {observe: 'response'});
  }

}
