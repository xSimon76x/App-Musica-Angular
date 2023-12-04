import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover:any = {
    cover: 'https://i.pinimg.com/1200x/8a/ec/bd/8aecbdbb9aa2bd92ecf0cbe31e2aafe6.jpg',
    album: 'DMC',
    name: 'Bury the ligth'
  }

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
