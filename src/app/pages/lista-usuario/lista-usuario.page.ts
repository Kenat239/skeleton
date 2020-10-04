import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.page.html',
  styleUrls: ['./lista-usuario.page.scss'],
})
export class ListaUsuarioPage implements OnInit {

  usuariosActobs: Observable <any>;

  constructor(
    public chat:ChatService
  ) { }

  ngOnInit() {
    // this.usuariosActobs = this.chat.getActiUser();

    // this.chat.emitActUsers();
  }

}
