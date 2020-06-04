import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  token = 'hola';
  constructor(
    private http: HTTP,
    private router: Router
  ) { }

  obtenerfakeToken(msg: string) {
    const url = 'http://192.168.100.20:5002/usuario/demo';

    return this.http.post(url, {mensaje: msg}, {observe: 'response'});
  }


  estaLogueado() {
    return (this.token.length > 3) ? true : false;
  }

  logout(){
    this.token = '1';
    this.router.navigate(['/login']);
  }
}
