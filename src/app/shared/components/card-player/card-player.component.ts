import { Component, Input, OnInit, inject } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-card-player',
    templateUrl: './card-player.component.html',
    styleUrls: ['./card-player.component.css'],
    standalone: true,
    imports: [NgIf, ImgBrokenDirective, NgClass]
})
export class CardPlayerComponent {
  @Input({ required: true }) mode: 'small' | 'big' = 'small';
  @Input({ required: true , alias: 'trackObject'}) track: TracksModel = {
    _id: 1,
    name: '',
    album: '',
    cover: '',
    // artist: null,
    url:''
  };

  multimediaService = inject(MultimediaService)

  sendPlay(track: TracksModel): void {
    this.multimediaService.trackInfoSignal$.set(track);//TODO similar al next() que antes se usaba
  }

}
