import { HeroesComponent } from './heroes.component';
import { empty } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 8 }
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
    component.heroes = HEROES;
  });

  describe('delete', () => {

    beforeEach(() => {
      mockHeroService.deleteHero.and.returnValue(empty());
    });

    it('should remove indicated hero from the heroes list', () => {
      expect(component.heroes.indexOf(HEROES[2])).toBeGreaterThan(-1);

      component.delete(HEROES[2]);

      expect(component.heroes.indexOf(HEROES[2])).toBe(-1);
    });

    it('should call deleteHero method on heroes service with correct param', () => {

      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledTimes(1);
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });

});
