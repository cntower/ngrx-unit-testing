import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PatternEffects } from './pattern.effects';

describe('PatternEffects', () => {
  let actions$: Observable<any>;
  let effects: PatternEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PatternEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PatternEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
