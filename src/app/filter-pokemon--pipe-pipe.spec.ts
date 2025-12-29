import { FilterPokemonPipePipe } from './filter-pokemon--pipe-pipe';

describe('FilterPokemonPipePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPokemonPipePipe();
    expect(pipe).toBeTruthy();
  });

  const val = [{id:1},{id:2}];

  it('should return an unmodifier val if searchString is not defined', ()=>{
    const pipe = new FilterPokemonPipePipe();
    const res = pipe.transform(val, undefined, undefined);
    expect(res).toBe(val);
  })
});
