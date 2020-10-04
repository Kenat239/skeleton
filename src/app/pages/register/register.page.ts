import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/websockets.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/interfaces/nombre';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  

  public nombre: string;
  public apellido:string;
  public email:string;
  public password:string;

  constructor(
    private WsS:SocketService,
    private US:UsuarioService,
    private router:Router
  ) { }

  ngOnInit() {
    
  }

  registrar() {
    this.US.registro(this.nombre, this.apellido,this.email,this.password).then( (res)=> {
      const parser:any = JSON.parse(res.data);
      console.log(parser);

      
      this.US.email = parser.email;
      this.US.password = parser.password;

      
      console.log('registrado');
         this.router.navigate(['/login']);
    }).catch( (mistake) => {
      const parser: any = JSON.stringify(mistake.error);
      console.log(parser);
    });
    
  }


  
   
  }


