import { Component, OnInit } from '@angular/core';
import { TracksModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit{

  listResults: TracksModel[] = [];

  constructor( private searchService: SearchService) {}

  ngOnInit(): void {
    
  }

  receiveData(event: string): void {
    this.searchService.searchTracks$(event)
    .subscribe({
      next: ({ data } :any) => {
        this.listResults = data;
      },
      error: () => {
        console.log('Error de conexion con receiveData');
      }
    })
  }

}
