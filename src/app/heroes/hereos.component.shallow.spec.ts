import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { DebugElement, Component, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Hero } from '../hero';

describe('HerosComponent (shallow)', () => {

  let fixture: ComponentFixture<HeroesComponent>;
  let de: DebugElement;
  let component: HeroesComponent;
  let mockHeroService: any;
  let HEROES: any;

  @Component({
    selector: 'app-hero',
    template: '<div>FakeHeroComponent</div>',
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
  }

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
      declarations: [
        HeroesComponent,
        FakeHeroComponent
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService }
      ],
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
