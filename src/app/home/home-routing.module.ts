import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'carrito',
        loadChildren: () => import('../pages/carrito/carrito.module').then(m => m.CarritoPageModule)
      },

      {
        path: 'chat',
        loadChildren: () => import ('../components/chat/chat.component').then(m => m.ChatComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
