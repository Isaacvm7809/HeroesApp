import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Heroe } from '../interfaces/Heroe';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class heroesService {
  private http:HttpClient = inject(HttpClient)
  private readonly url = environments.baseUrl;

  constructor() { }

  getHeroes():Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.url}/heroes`);
  }

  getHeroebyId(id : string):Observable<Heroe | undefined>{
    return this.http.get<Heroe>(`${this.url}/heroes/${id}`)
      .pipe(
        catchError( (error) => of(undefined) )
      );
  }

  // http://localhost:3000/heroes?q=batman&_limit=5
  // http://localhost:3000/heroes?superhero=superman&_limit=5
  // http://localhost:3000/heroes?superhero=Batman&_limit=5
  getSuggestions(query:string, limit:number): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.url}/heroes?publisher=${query}&_limit={limit}`)
  }

  addHero(hero: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.url}/heroes`, hero);
  }

  updateHero(hero: Heroe): Observable<Heroe>{
    if (!hero.id) {
      throw Error('Se requiere heroe');
    }
    return this.http.patch<Heroe>(`${this.url}/heroes/${hero.id}`, hero);
  }


}
