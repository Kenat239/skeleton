import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { SocketService } from '../services/websockets.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  constructor(
    public useS: UsuarioService,
    private router: Router,
   private WsS: SocketService
  ) {}

  ngOnInit() {

 this.WsS.escucha(); 
    

     
  }

borrar(){
  this.router.navigate(['/login'],{replaceUrl:true})
 // this.useS.logout();
}
}
