import { Component, Input } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { SectionGenericComponent } from '../../../../shared/components/section-generic/section-generic.component';
import { getAllRandom$, getAllTracks$ } from './function-inyect';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tracks-page',
    templateUrl: './tracks-page.component.html',
    styleUrls: ['./tracks-page.component.css'],
    standalone: true,
    imports: [SectionGenericComponent, CommonModule]
})

//? Se necesita el CommonModule, para usar el "json" en el html

export class TracksPageComponent {

  @Input() currentUser: any;
  @Input() category: any;

  tracksTrending: Array<TracksModel> = [];
  tracksRandom: Array<TracksModel> = [];
  listObserver$: Array<Subscription> = [];

  constructor(){
    getAllTracks$()
      .subscribe({
        next: (response: any) => {
          this.tracksTrending = response;
        },
        error: () => {
          console.log('Error de conexion getAllTracks');
        }
      })
    
    getAllRandom$()
    .subscribe({
      next: (response) => {
        this.tracksRandom = response;
      },
      error: () => {
        console.log('Error de conexion getAllRandom');
      }
    })
  }

  //Almacenado solo para observar formas de utilizar ciertos srevicios
  //ngOnInit(): void {
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
    //this.loadDataRandom();
  //}

}
