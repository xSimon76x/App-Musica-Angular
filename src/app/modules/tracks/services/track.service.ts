import { Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  // dataTracksTrending$: Observable<TracksModel[]> = of([]);
  // dataTracksRandom$: Observable<any> = of([]);
  private readonly URL = environment.api;

  constructor( private httpCliente: HttpClient) { 
    // const { data }: any = (dataRaw as any).default;
    // this.dataTracksTrending$ = of(data);

    // this.dataTracksRandom$ = new Observable((observable) => {

    //   const trackExample: TracksModel = {
    //     _id: 1,
    //     name: 'Memory Reboot',
    //     album: 'Voj,Narvent',
    //     url: 'http://',
    //     cover: 'https://i1.sndcdn.com/artworks-8zY79hHzgzoNqx9O-qPGziw-t500x500.jpg'
    //   }
      
    //   setTimeout(() => {
    //     observable.next([trackExample])
    //   }, 3500)
    // })


  }

  //TODO Devolver todas las canciones
  getAllTracks$(): Observable<any> {
    return this.httpCliente.get(this.URL + '/tracks')
      .pipe(
        map( ({ data }: any) => {
          return data;
        }),
        catchError( (error: any) => {

          console.log('Algo paso revisame!!!', error);

          return of([])
        })
      )
  }

  skyById(listTracks: TracksModel[], id: number): Promise<TracksModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter( a => a._id !== id);
      resolve(listTmp);
    })
  }

  getAllRandom$(): Observable<any> {
    
    return this.httpCliente.get(this.URL + '/tracks') // Para provocar un error poner tracks123
      .pipe(
        //TODO Solo puede haber un solo map
        // map( ({ data }: any) => {
        //   return data.reverse(); //TODO Devolvemos lista revertida
        // }),
        // map( ({ data }: any) => {
        //   return data.filter((tracks: TracksModel) => tracks._id !== 1); //TODO Aplicar un filter comun de array
        // }),
        mergeMap(({ data }: any) => this.skyById(data, 2 )),
        
        //TODO El tap, es para poder ejecutar la data para algun console.log por ejemplo
        //tap( data => console.log(data))

        catchError( (error: any) => {

          console.log('Algo paso revisame!!!', error);

          return of([])
        })
      )      
  }
}
