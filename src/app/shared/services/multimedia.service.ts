import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callBack: EventEmitter<any> = new EventEmitter<any>();
  
  myObservable1$: Observable<any> = new Observable(
    (observer: Observer<any>) => {
      observer.next('✔');

      // setTimeout(() => {
      // !? Se completa correctamente la solicitud y no se ejecuta lo demas
      //   observer.complete();
      // }, 1000);

      setTimeout(() => {
        observer.next('✔');
      }, 2500);

      setTimeout(() => {
        observer.error('🔴');
      }, 3500);
    }
  );

  constructor() { }

  private listenAllEvents(): void {

  }
}
