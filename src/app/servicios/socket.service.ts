import { Injectable } from '@angular/core';
import {UsuarioService} from '../servicios/usuario.service';
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

  // emision de eventos
  emit( evento: string, payload?: any, callback?: Function) {

    console.log('emitiendo', evento);
  
    this.socket.emit(evento, payload, callback);
    }

    //escucha de eventos
    hear( event: string){
      return this.socket.fromEvent( event );
    }

    GEtusuarios(){
      return this.usuS.usuario
    }

  escucha () {

   this.socket.on ( 'login', (res) => {
      console.log ('Conexion establecida', res);
      this.socket.emit ( 'login', this.usuS.token );
    } );
  }

  concetar(){
    this.socket.on('connect', () => {
      console.log('conectado al servidor');
    })
  }
  desconectar() {
    this.socket.on('desconectar', () => {
      console.log('te desconectaste del servidor');
    })
  }
}
