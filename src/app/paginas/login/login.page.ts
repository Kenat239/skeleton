import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email;
  public password;

  constructor(
    private useS: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  enviar() {
    this.useS.logueado (this.email, this.password).then ( (res) => {
      const parser: any =JSON.parse (res.data);
      console.log (parser);
      this.useS.usuario = parser.usuario;
      this.useS.token = parser.token;
      this.router.navigate (['/'], {replaceUrl: true});
    }).catch ( (mistake) => {
      let parser: any = JSON.stringify (mistake.error);
      console.log (parser);
    });
  }



}
