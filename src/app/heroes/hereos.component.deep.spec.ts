import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroComponent } from '../hero/hero.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('HeroesComponent (deep test)', () => {

  const HEREOS = [
    { id: 1, name: 'SpiderDude', strength: 8 },
    { id: 2, name: 'Wonderful Woman', strength: 24 },
    { id: 3, name: 'SuperDude', strength: 8 }
  ];
  let mockService: any;
  let fixture: ComponentFixture<HeroesComponent>;
  let component: HeroesComponent;
  let element: HTMLElement;

  beforeEach(() => {
    mockService = jasmine.createSpyObj(['getHeroes']);
    mockService.getHeroes.and.returnValue(of(HEREOS));
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        HeroesComponent,
        HeroComponent
      ],
      providers: [
        { provide: HeroService, useValue: mockService }
      ]
    });

    fixture = TestBed.createComponent(HeroesComponent);
    fixture.detectChanges();

    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should render root component', () => {

    expect(true).toBe(true);
  });
});
