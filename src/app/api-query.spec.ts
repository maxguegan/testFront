import { TestBed } from '@angular/core/testing';

import { ApiQuery } from './api-query';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { Pokemon } from './pokemon';
describe('ApiQuery', () => {
  let service: ApiQuery;

  beforeEach(async () => {
    TestBed.configureTestingModule({});
   
   
        await TestBed.configureTestingModule({
          
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),

        provideRouter([]),
      ],
    }).compileComponents();
     service = TestBed.inject(ApiQuery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all pokemon', () => {
    const ctrl = TestBed.inject(HttpTestingController);

    

 service.getPokemonList().subscribe(pokemons => {
    expect(pokemons.results.length).toBe(3);
  });
const req = ctrl.expectOne({ method: 'GET', url:'https://[…]/pokemons' });
                  
req.flush([{}, {}, {}]); // return 3 empty objects as dummy pokemons
ctrl.verify();
  });
  it('should return a pokemon by id', () => {
    const ctrl = TestBed.inject(HttpTestingController);
  const id = '1';
  const mockQuery = 'pseudoQuery'
 service.getPokemonFromId(mockQuery).subscribe(pokemon => {
    expect(pokemon.id).toBe(id);
  });
const req = ctrl.expectOne({ method: 'GET', url:mockQuery });
                  
req.flush(new Pokemon(id,"","", [])); // return 3 empty objects as dummy pokemons
ctrl.verify();
  });
   it('should return a pokemon by url', () => {
    const ctrl = TestBed.inject(HttpTestingController);
  const mockUrl = '1';
  const mockQuery = 'pseudoQuery'
 service.getPokemonFromUrl(mockQuery).subscribe(pokemon => {
    expect(pokemon.url).toBe(mockUrl);
  });
const req = ctrl.expectOne({ method: 'GET', url:mockQuery });
                  
req.flush(new Pokemon('',"",mockUrl, [])); // return 3 empty objects as dummy pokemons
ctrl.verify();
  })
});
