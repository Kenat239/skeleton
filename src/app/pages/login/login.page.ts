import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { SocketService } from '../../services/websockets.service';
import { Usuario } from '../../interfaces/nombre';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mensaje;

 
  public email;
  public password;
  
  public user:Usuario;

  constructor(
    private useS: UsuarioService,
    private WsS: SocketService,
    private router: Router,
    
  ) { }

  ngOnInit() {
  }

  login(){
        this.router.navigate(['/'], {replaceUrl: true});
   
  }


  enviar(){
    this.useS.logueado(this.email,this.password).then( (res) => {
      const parser: any = JSON.parse(res.data);
      console.log(parser);
      this.useS.email = parser.email;
      this.useS.password = parser.password;
      this.useS.token = parser.token;
     
     
      this.router.navigate(['/'], {replaceUrl: true});

    })
  }
}
