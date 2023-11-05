import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

// creado con el comando de -> ng g m shared/shared --flat
// con esto se evita que se creen dos carpetas para luego crear el modulo

//para crear componentes compartidos, seria con el comando -> ng g m shared/components/HeaderUser

@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
