import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

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

  //!? Un subject es un observable y un observer a la vez
  //!? por eso se puede usar la propiedad next(), de esta forma

  myObservable2$: Subject<any> = new Subject()
  
  //!? El BehaviorSubject es muy similar al Subject
  //!? en uso del manejo de las propiedades; next, complete, error
  myObservable3$: BehaviorSubject<any> = new BehaviorSubject('💯💯💯💯');

  

  constructor() {
    setTimeout(() => {
      this.myObservable2$.next('💥💥💥💥💥');
    }, 2000);

    setTimeout(() => {
      this.myObservable2$.error('💢💢💢💢💢');
    }, 2500);


    setTimeout(() => {
      this.myObservable3$.next('💯💯💥💥💥💥💥');
    }, 2000);

    setTimeout(() => {
      this.myObservable3$.error('💯💯💢💢💢💢💢');
    }, 2500);
  }

  private listenAllEvents(): void {

  }
}
