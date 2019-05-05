import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent (shallow tests)', () => {

  let fixture: ComponentFixture<HeroComponent>;
  let debudElement: DebugElement;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroComponent);
    debudElement = fixture.debugElement;
    element = fixture.nativeElement;

  });

  it('should have corect hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength:  10 };

    expect(fixture.componentInstance.hero.name).toBe('SuperDude');

  });

  it('should render the hero nam in an anchor tag', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength:  10 };

    fixture.detectChanges();

    expect(element.querySelector('a').textContent).toContain('SuperDude');

    expect(debudElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude');

  });
});
