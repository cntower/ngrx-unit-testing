import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { PatternEffects } from './pattern.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PatternService } from 'src/app/patterns/pattern.service';
import { Pattern } from './pattern.model';

const PATTERNS: Pattern[] = [
  {
    id: 1,
    name: 'Abstract factory',
    description: 'factory groups object factories that have a common theme.',
    type: 'Creational',
  },
];

fdescribe('PatternEffects', () => {
  let actions$: Observable<any>;
  let effects: PatternEffects;
  let patternService: PatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PatternEffects,
        PatternService,
        provideMockActions(() => actions$),
      ],
    });

    patternService = TestBed.inject(PatternService);
    patternService.getPatterns = jasmine
      .createSpy()
      .and.returnValue(of(PATTERNS));

    effects = TestBed.inject(PatternEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
  it('should get action "[Pattern/API] Load Patterns Success"', () => {
    actions$ = of({ type: '[Pattern/UI] Load Patterns' });
    effects.loadPatterns$.subscribe((action) => {
      expect(action).toEqual({
        type: '[Pattern/API] Load Patterns Success',
        patterns: PATTERNS,
      });
    });
  });

  it('should get action "[Pattern/API] Load Patterns Failure"', () => {
    actions$ = of({ type: '[Pattern/UI] Load Patterns' });
    patternService.getPatterns = jasmine
      .createSpy()
      .and.returnValue(throwError({ message: 'Test error' }));
    effects.loadPatterns$.subscribe((action) => {
      expect(action).toEqual({
        type: '[Pattern/API] Load Patterns Failure',
        error: { message: 'Test error' },
      });
    });
  });
});
