import { EventEmitter, Injectable, effect, signal } from '@angular/core';
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
  public trackInfoSignal$ = signal<TracksModel | undefined>(undefined);

  // public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeElapsedSignal$ = signal<string>('00:00');
  // public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public timeRemainingSignal$ = signal<string>('-00:00');
  // public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerStatusSignal$ = signal<string>('paused');
  // public playerPorcentage$: BehaviorSubject<number> = new BehaviorSubject(0);
  public playerPorcentageSignal$ = signal<number>(0);


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

    effect(() => {
      const dataInfo = this.trackInfoSignal$();
      if(dataInfo) this.setAudio(dataInfo);
    })

    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime , false); 
    this.audio.addEventListener('playing', this.setPlayerStatus , false); 
    this.audio.addEventListener('play', this.setPlayerStatus , false); 
    this.audio.addEventListener('pause', this.setPlayerStatus , false); 
    this.audio.addEventListener('ended', this.setPlayerStatus , false); 
  }

  private setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'play':
        this.playerStatusSignal$.set('next');
        break;
      case 'playing':
        this.playerStatusSignal$.set('playing');
        break;
      case 'ended':
        this.playerStatusSignal$.set('ended');
        break;
      default:
        this.playerStatusSignal$.set('paused');
        break;
    }
  }

  private calculateTime = (): void => {
    const { duration, currentTime } = this.audio;

    this.setTimeElapsed(currentTime);
    this.setRemaining(currentTime, duration);
    this.setPorcentage(currentTime, duration);
  }

  private setTimeElapsed(currentTime: number): void {
    let seconds = Math.floor(currentTime % 60);
    let minutes = Math.floor( (currentTime / 60) % 60);

    const desplaySecond = (seconds < 10) ? '0'+seconds : seconds;
    const desplayMinutes = (minutes < 10) ? '0'+minutes : minutes;

    const displayFormat = desplayMinutes +':'+ desplaySecond;

    this.timeElapsedSignal$.set(displayFormat);
    
  }

  private setRemaining(currentTime: number, duration: number): void {
    
    if (isNaN(duration) && isNaN(duration)) {
      this.timeRemainingSignal$.set('-00:00');
      return;
    }

    let timeLeft = duration - currentTime;
    let seconds = Math.floor(timeLeft % 60);
    let minutes = Math.floor( (timeLeft / 60) % 60);

    const desplaySecond = (seconds < 10) ? '0'+seconds : seconds;
    const desplayMinutes = (minutes < 10) ? '0'+minutes : minutes;

    const displayFormat = '-'+desplayMinutes +':'+ desplaySecond;


    this.timeRemainingSignal$.set(displayFormat);
  }

  private setPorcentage(currentTime: number, duration: number): void {
    //TODO  duration --> 100%
    //TODO  currentTime --> (x)
    //TODO  (currentTime * 100) / duration

    let porcentage = ( currentTime * 100 ) / duration;

    this.playerPorcentageSignal$.set( porcentage );
  }

  //TODO Funciones publicas
  public setAudio(track: TracksModel): void {
    this.audio.src = track.url;
    this.audio.play();
  }

  public togglePlayer(): void {
    (this.audio.paused) ? this.audio.play() : this.audio.pause()
  }

  public seekAudio(percentage: number): void {
    const { duration } = this.audio;
    const percentageToSecond = (percentage * duration) / 100;
    this.audio.currentTime = percentageToSecond;
  }
}
