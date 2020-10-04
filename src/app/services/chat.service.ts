import { Injectable } from '@angular/core';
import { SocketService } from './websockets.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private WsS: SocketService
  ) { }

  // EnviaMensaje(msg:string){
  //   const payload = {
  //     de: this.WsS.GetUser().nombre,
  //     cuerpo: msg
  //   };

  //   this.WsS.emit('enviar-mensaje', payload);

  // }

  // ResibirMensaje() {
  //   return this.WsS.hear('recibir-mensaje');
  // }

  // getActiUser(){
  //  return this.WsS.hear('usuarios-activos');
  // }

  // emitActUsers(){
  //   this.WsS.emit('usuarios-activos');
  // }
}
