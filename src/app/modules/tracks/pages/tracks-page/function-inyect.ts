import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject } from "@angular/core";
import { TracksModel } from "@core/models/tracks.model";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { environment } from "src/environments/environments";
const URL = environment.api;


const skyById = (listTracks: TracksModel[], id: number): Promise<TracksModel[]> => {
    return new Promise((resolve, reject) => {
    const listTmp = listTracks.filter( a => a._id !== id);
    resolve(listTmp);
})
}


export const getAllTracks$ = (): Observable<any> => {



    return inject(HttpClient).get(URL + '/tracks', {
      headers: new HttpHeaders({
        authorization: 'Bearer TOKEN'
      })
    }).pipe(
        map( ({ data }: any) => {
          return data;
        }),
        catchError( (error: any) => {

          console.log('Algo paso revisame!!!', error);

          return of([])
        })
    )
}

export const getAllRandom$ = (): Observable<any> => {
    
    return inject(HttpClient).get(URL + '/tracks') // Para provocar un error poner tracks123
      .pipe(
        
        mergeMap(({ data }: any) => skyById(data, 2 )),

        catchError( (error: any) => {

          console.log('Algo paso revisame!!!', error);

          return of([])
        })
      )      
  }
