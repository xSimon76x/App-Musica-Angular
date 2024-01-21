import { EventEmitter, Injectable } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
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

  public audio!:HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');


  constructor() {
    // setTimeout(() => {
    //   this.myObservable2$.next('💥💥💥💥💥');
    // }, 2000);

    // setTimeout(() => {
    //   this.myObservable2$.error('💢💢💢💢💢');
    // }, 2500);


    // setTimeout(() => {
    //   this.myObservable3$.next('💯💯💥💥💥💥💥');
    // }, 2000);

    // setTimeout(() => {
    //   this.myObservable3$.error('💯💯💢💢💢💢💢');
    // }, 2500);

    this.audio = new Audio();

    this.trackInfo$.subscribe({
      next: (responseOk) => {
        if (responseOk) {
          this.setAudio(responseOk);
        }
      },
      error: (responseFail) => {
        console.log('Error trackInfo mediaplayer', responseFail);
      }
    })

    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime , false); 
  }

  private calculateTime = (): void => {
    const { duration, currentTime } = this.audio;

    this.setTimeElapsed(currentTime);
    this.setRemaining(currentTime, duration);
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor( (currentTime / 60) % 60);

    const desplaySecond = (seconds < 10) ? '0'+seconds : seconds;
    const desplayMinutes = (minutes < 10) ? '0'+minutes : minutes;

    const displayFormat = desplayMinutes +':'+ desplaySecond;

    this.timeElapsed$.next(displayFormat);
    
  }

  private setRemaining(currentTime: number, duration: number): void {
    
    if (isNaN(duration) && isNaN(duration)) {
      this.timeRemaining$.next('-00:00');
      return;
    }

    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor( (timeLeft / 60) % 60);

    const desplaySecond = (seconds < 10) ? '0'+seconds : seconds;
    const desplayMinutes = (minutes < 10) ? '0'+minutes : minutes;

    const displayFormat = '-'+desplayMinutes +':'+ desplaySecond;


    this.timeRemaining$.next(displayFormat);
  }

  //TODO Funciones publicas
  public setAudio(track: TracksModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }
}
