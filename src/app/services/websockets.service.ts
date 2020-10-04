import { Injectable } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import {Router} from '@angular/router';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(
    private socket: Socket,
    private usuS: UsuarioService
  ) { }

  escucha () {

   this.socket.on ( 'login', (res) => {
      console.log ('Conexion establecida', res);
      this.socket.emit ( 'login', this.usuS.token );
    } );
  }
}