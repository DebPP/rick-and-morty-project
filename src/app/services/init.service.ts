import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  private http = inject(HttpClient);
  // private apiUrl = 'https://rickandmortyapi.com/api/episode'

  getEpisodes(): Observable<any> {
    return this.http.get<any>('https://rickandmortyapi.com/api/episode')
  }

  getCharacters(): Observable<any> {
    return this.http.get<any>('https://rickandmortyapi.com/api/character')
  }

  getLocations(): Observable<any> {
    return this.http.get<any>('https://rickandmortyapi.com/api/location')
  }
}
