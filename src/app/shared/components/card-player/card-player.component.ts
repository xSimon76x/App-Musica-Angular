import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TracksModel = {
    _id: 1,
    name: '',
    album: '',
    cover: '',
    // artist: null,
    url:''
  };


  constructor( private multimediaService: MultimediaService) {}

  ngOnInit(): void {
    
  }

  sendPlay(track: TracksModel): void {
    
    this.multimediaService.callBack.emit(track)
  }

}
