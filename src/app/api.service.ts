import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getListOfPokemonUrls(): Observable<Array<any>> {
    return this.http.get(POKEAPI_URL)
      .pipe(
        map((response: any) => response.results)
      );
  }
}
