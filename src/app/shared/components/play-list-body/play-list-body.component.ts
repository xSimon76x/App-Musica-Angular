import { Component, Input, OnInit } from '@angular/core';
import * as dataRaw from '../../../../app/data/tracks.json'
import { TracksModel } from '@core/models/tracks.model';
import { OrderListPipe } from '../../pipe/order-list.pipe';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrls: ['./play-list-body.component.css'],
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, ImgBrokenDirective, OrderListPipe]
})
export class PlayListBodyComponent implements OnInit{

  @Input() tracks: TracksModel[] = [];

  optionSort: {
    property: string | null, 
    order: string
  } = {
    property: null,
    order: 'asc'
  }

  constructor(){}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default

    this.tracks = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;

    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }

}
