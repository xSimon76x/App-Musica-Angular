import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;

  constructor( private http: HttpClient) { }

  searchTracks$(term: string): Observable<any> {
    return this.http.get(this.URL + '/tracks');
  }
}
