import { TestBed } from '@angular/core/testing';

import { CurPokemon } from './cur-pokemon';

describe('CurPokemon', () => {
  let service: CurPokemon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurPokemon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
