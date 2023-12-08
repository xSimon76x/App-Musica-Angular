import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';

// creado con el comando de -> ng g m shared/shared --flat
// con esto se evita que se creen dos carpetas para luego crear el modulo

//para crear componentes compartidos, seria con el comando -> ng g m shared/components/HeaderUser

@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [  // De las declaraciones descritas, se definira cuales quiero exportar a otros componentes.
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ]
})
export class SharedModule { }
