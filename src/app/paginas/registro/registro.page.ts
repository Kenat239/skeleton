import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/servicios/usuario.service';
import {Socket} from 'ngx-socket-io';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public nombre;
  public apellido;
  public email;
  public password;

  constructor(
    private socket: Socket,
    private useS: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  mandarRegistro() {
    this.useS.registro (this.nombre,
      this.apellido, this.email, this.password).then ( (res) => {
      const parser: any =JSON.parse (res.data);
      console.log (parser);
      this.useS.email= parser.email;
      this.useS.password= parser.password;
      this.router.navigate (['/login'], {replaceUrl: true});
    }).catch ( (mistake) => {
      let parser: any = JSON.stringify (mistake.error);
      console.log (parser);
    });
  }

}
