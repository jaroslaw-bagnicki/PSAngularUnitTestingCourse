import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { DebugElement } from '@angular/core';
import { HeroService } from '../hero.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('HerosComponent (shallow)', () => {

  let fixture: ComponentFixture<HeroesComponent>;
  let de: DebugElement;
  let component: HeroesComponent;
  let mockHeroService: any;
  let HEROES: any;

  beforeEach(() => {
    mockHeroService = jasmine.createSpyObj([
      'getHeroes', 'getHero', 'searchHeroes', 'addHero', 'deleteHero', 'updateHero'
    ]);

    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 8 }
    ];

    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should set heroes from service', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    expect(component.heroes).toBeUndefined();
    fixture.detectChanges();
    expect(component.heroes).toEqual(HEROES);
  });
});
