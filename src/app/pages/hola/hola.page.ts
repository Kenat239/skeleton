import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/websockets.service';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  nombre
  constructor(
    private wsS:SocketService
  ) { }

  ngOnInit() {
  }

  name(){

  }

}
