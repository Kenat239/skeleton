import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  texto = '';

  chatSubcription: Subscription;


  elemento: HTMLElement;
  mensajes: any[] = [];

  constructor(
    public chatS:ChatService
  ) { }

  ngOnInit() {
    // this.elemento = document.getElementById('chat-mensajes');
    // this.chatSubcription = this.chatS.ResibirMensaje().subscribe(msg => {
    //   console.log(msg);
    //   this.mensajes.push(msg);

    //   setTimeout(() => {
    //     this.elemento.scrollTop = this.elemento.scrollHeight;
    //   }, 50);

    // })
  }
  ngOnDestroy(): void {
    // this.chatSubcription.unsubscribe();
    
  }

  // enviar() {
  //   if (this.texto.trim().length === 0) {
  //     return
  //   }

  //   this.chatS.EnviaMensaje(this.texto);
  //   console.log(this.texto);

  //   this.texto = '';
  //}



}
