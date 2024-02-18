import { 
  Component, 
  DestroyRef, 
  ElementRef, 
  OnInit, 
  ViewChild, 
  inject 
} from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO Programacion reactiva
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
    selector: 'app-media-player',
    templateUrl: './media-player.component.html',
    styleUrls: ['./media-player.component.css'],
    standalone: true,
    imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe]
})
export class MediaPlayerComponent implements OnInit {

  mockCover: TracksModel = {
    cover: 'https://i.pinimg.com/1200x/8a/ec/bd/8aecbdbb9aa2bd92ecf0cbe31e2aafe6.jpg',
    album: 'DMC',
    name: 'Bury the ligth',
    url: '',
    _id: 1
  }

  state: string = 'paused';
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  multimediaService = inject(MultimediaService);
  destroyRef = inject(DestroyRef)


  constructor( ) {

  }

  //!? ngOnInit: Es el primer ciclo de vida ejecutable del componente, luego del CONSTRUCTOR(){}
  ngOnInit(): void {

    this.multimediaService.myObservable3$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (responseOk) => {
        //TODO next()
        console.log('El agua llega perfecto!', responseOk);
      },
      error: (responseFail) => {
        console.log('Se tapo la tuberia', responseFail);
      }
    });

    this.multimediaService.trackInfo$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (responseOk) => {

        console.log('Conexion a trackInfo!', responseOk);
      },
      error: (responseFail) => {
        console.log('Error trackInfo mediaplayer', responseFail);
      }
    });

    this.multimediaService.playerStatus$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe({
      next: (state) => {
        this.state = state;
      },
      error: (responseFail) => {
        console.log('Error multimediaService.playerStatus', responseFail);
      }
    });

  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = event;
    const { x, width } = elNative.getBoundingClientRect();
    const realClickX = clientX - x;
    const percentageBarFrom = (realClickX * 100) / width;

    this.multimediaService.seekAudio(percentageBarFrom);
  }

}
