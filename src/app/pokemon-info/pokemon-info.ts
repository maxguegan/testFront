import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { CurPokemon } from '../cur-pokemon';
import { ApiQuery } from '../api-query';

@Component({
  selector: 'app-pokemon-info',
  standalone: false,
  templateUrl: './pokemon-info.html',
  styleUrl: './pokemon-info.css'
})
export class PokemonInfo {
  constructor(private query: ApiQuery, private curPokemon: CurPokemon){
    this.curPokemon.getObservable().subscribe(value => this.query.getPokemonFromUrl(value).subscribe(value => this.selectedPokemon = value))
  }

  
   
    
  
  selectedPokemon?:Pokemon;
  
}
