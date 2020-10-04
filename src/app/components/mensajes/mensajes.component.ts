import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../servicios/chat.service';
import { SocketService } from '../../servicios/socket.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss'],
})
export class MensajesComponent implements OnInit {

  public mensajes : any[] = [];

  public texto = '';
  elemento:HTMLElement;

  constructor(
    private WS: SocketService,
    private chat: ChatService
  ) { }

  ngOnInit() {

    this.elemento = document.getElementById('chatMensajes');

    this.WS.hear('recibirMensaje').subscribe( (res:any) => {
      console.log(res);

      this.mensajes.push(res)
    });
  }

  EnviarMensaje(){
    if (this.texto.trim().length === 0) {
      return;
    }
    const payload = {
      de:this.WS.GEtusuarios().nombre,
      contenido: this.texto
    }
    this.WS.emit('enviarMensaje', payload);
    this.texto=''
  }
}
