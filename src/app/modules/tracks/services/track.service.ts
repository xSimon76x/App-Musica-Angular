import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TracksModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]);

  constructor() { 
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);

    this.dataTracksRandom$ = new Observable((observable) => {

      const trackExample: TracksModel = {
        _id: 1,
        name: 'Memory Reboot',
        album: 'Voj,Narvent',
        url: 'http://',
        cover: 'https://i1.sndcdn.com/artworks-8zY79hHzgzoNqx9O-qPGziw-t500x500.jpg'
      }
      
      setTimeout(() => {
        observable.next([trackExample])
      }, 3500)
    })
  }
}
