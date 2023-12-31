import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO Programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover: TracksModel = {
    cover: 'https://i.pinimg.com/1200x/8a/ec/bd/8aecbdbb9aa2bd92ecf0cbe31e2aafe6.jpg',
    album: 'DMC',
    name: 'Bury the ligth',
    url: '',
    _id: 1
  }

  listObservers: Array<Subscription> = [];

  constructor( private multimediaService: MultimediaService) {

  }

  ngOnInit(): void {
    const observer1: Subscription = this.multimediaService.callBack.subscribe(
      (response: TracksModel) => {
        console.log("recibiendo camcion: " + response.name);
      }
    )

    this.listObservers = [observer1];
  }

  ngOnDestroy(): void {
    // Este es la ultima funcion que se ejecuta, luego del ngOnInit

    this.listObservers.forEach( u => u.unsubscribe());
  }
}
