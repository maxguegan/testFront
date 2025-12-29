import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my-component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { PokemonInfo } from '../pokemon-info/pokemon-info';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-info',
  standalone: false,
})
export class PokemonMockInfo {}


describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // si MyComponent est un composant standalone
      //imports: [MyComponent],
      // si MyComponent n'est PAS un composant standalone
       declarations: [MyComponent],
 
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),

        provideRouter([]),

      ],
    }).overrideComponent(MyComponent, {
    remove: { imports: [ PokemonInfo ] },
    add: { imports: [ PokemonMockInfo ] }
  })
  .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
 
  
});