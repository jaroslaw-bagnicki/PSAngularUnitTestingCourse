import { StrengthPipe } from './strength.pipe';


describe('strength pipe', () => {

  let pipe: StrengthPipe;

  beforeEach(() => pipe = new StrengthPipe());

  it('should return \'weak\' if strength is 5', () => {
    const result = pipe.transform(5);
    expect(result).toBe('5 (weak)');
  });

  it('should return \'strong\' if strength is 10', () => {
    const result = pipe.transform(10);
    expect(result).toBe('10 (strong)');
  });

  it('should return \'unbelievable\' if strength is 21', () => {
    const result = pipe.transform(21);
    expect(result).toBe('21 (unbelievable)');
  });
});
