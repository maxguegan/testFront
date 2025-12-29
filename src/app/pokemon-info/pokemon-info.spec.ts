import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfo } from './pokemon-info';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
describe('PokemonInfo', () => {
  let component: PokemonInfo;
  let fixture: ComponentFixture<PokemonInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonInfo],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),

        provideRouter([]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
