import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class CurPokemon {
  public curPokemonUrl = new Subject<string>();

  getObservable(): Subject<string> {
    console.log("test")
    return this.curPokemonUrl;
  }

  setObservable(newUrl: string){
    console.log(newUrl);
    this.curPokemonUrl.next(newUrl);
  }
}
