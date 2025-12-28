import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';


import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyComponent } from './my-component/my-component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe-pipe';
import { PokemonInfo } from './pokemon-info/pokemon-info';
import { CurPokemon } from './cur-pokemon';

@NgModule({
  declarations: [
    App,
    MyComponent,
    PokemonInfo,
    FilterPokemonPipePipe,
    PokemonInfo
  ],
  imports: [

    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

    importProvidersFrom([HttpClientModule,CurPokemon])
  ],
  bootstrap: [App]
})
export class AppModule { }
