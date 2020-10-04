import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public usuarios:any[] = [];

  constructor(
    private WsS: SocketService,
    private socket: Socket
  ) { }

  sendMensaje(msg:string) {
    const payload = {
      de:this.WsS.GEtusuarios().nombre,
      para:this.WsS.GEtusuarios().nombre,
      contenido: msg
    };
    this.WsS.emit('enviarMensaje', payload)
  }

  GetMensaje(){
    this.WsS.hear('recibirMensaje').subscribe( (res:any) => {
      
    })
  }

  // GetMensajePriv() {
  //  return this.WsS.hear('mensaje-privado');
  // }

  getUserActivos() {
   
   return this.WsS.hear('usuariosConectados').subscribe( (res:any) => {
     
    this.usuarios = res.usuarios;

   })
  }

  emitUserActivos() {
   return this.WsS.emit('usuariosConectados')
  }
}
