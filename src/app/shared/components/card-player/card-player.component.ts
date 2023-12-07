import { Component, Input, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';

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


  constructor() {}

  ngOnInit(): void {
    
  }

}
