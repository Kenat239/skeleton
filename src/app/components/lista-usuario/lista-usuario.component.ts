import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../servicios/chat.service';
import { Observable } from 'rxjs';
import { UsuarioService } from '../../servicios/usuario.service';
import { SocketService } from '../../servicios/socket.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss'],
})
export class ListaUsuarioComponent implements OnInit {

  usuarios:any[] = [];
  
  constructor(
    public socketS:SocketService
  ) { }

  ngOnInit() {
    this.socketS.hear('usuariosConectados').subscribe( (res:any) => {

      this.usuarios = res.usuarios
      console.log(res);
    })
  }

}
