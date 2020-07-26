import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { PatternEffects } from './pattern.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('PatternEffects', () => {
  let actions$: Observable<any> = of({ type: '[Pattern/UI] Load Patterns' });
  let effects: PatternEffects;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatternEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(PatternEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
