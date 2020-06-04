import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mensaje;

  constructor(
    private useS: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  enviar(){
    this.useS.obtenerfakeToken(this.mensaje).then( (res) => {
      const parser: any = JSON.parse(res.data);
      console.log(parser);
      this.useS.token = parser.token;
      this.router.navigate(['/'], {replaceUrl: true});

    }).catch( (mistake) => {
      // tslint:disable-next-line:prefer-const
      let parser: any = JSON.stringify(mistake.error);
      console.log(parser);
    });
  }
}
