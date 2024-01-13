import { Component, OnDestroy, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy{

  tracksTrending: Array<TracksModel> = [];
  tracksRandom: Array<TracksModel> = [];
  listObserver$: Array<Subscription> = [];

  constructor( private trackService: TrackService){ }

  ngOnInit(): void {
    // const { data }: any = (dataRaw as any).default;
    // this.tracksRandom = data;

    // const observer1$ = this.trackService.dataTracksTrending$.
    //   subscribe( response => {
    //     console.log("Cancion trending entrando!");
    //     this.tracksTrending = response;
    //   });
      
    //   const observer2$ = this.trackService.dataTracksRandom$.
    //   subscribe( response => {
    //     console.log("Cancion random entrando!");
    //     this.tracksRandom = [...this.tracksRandom, ...response];
    //   });

    //   this.listObserver$ = [observer1$, observer2$];

    this.trackService.getAllTracks$()
      .subscribe( response => {
        this.tracksTrending = response;
      })

    this.trackService.getAllRandom$()
      .subscribe( response => {
        this.tracksRandom = response;
      })
  }

  ngOnDestroy(): void {

  }

}
