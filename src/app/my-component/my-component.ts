import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ApiQuery } from '../api-query';
import { CurPokemon } from '../cur-pokemon';
@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
 
  constructor(private query: ApiQuery, private curPokemon: CurPokemon){}
   pokemonList:Pokemon[] = [];
  id: string = '';
  selectedPokemonUrl: string = "";
  ngOnInit(){
   this.getPokemonList();
  }
  
  getPokemonList():void{
     this.query.getPokemonList()
     .subscribe(_pokemonList => this.pokemonList = _pokemonList.results);
  }
  getPokemon(){
    console.log(1 + this.selectedPokemonUrl)
    if(this.selectedPokemonUrl == "")return;
    this.curPokemon.setObservable(this.selectedPokemonUrl);
  }
}

