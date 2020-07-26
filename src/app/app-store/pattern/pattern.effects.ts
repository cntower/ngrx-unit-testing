import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PatternActions from './pattern.actions';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { PatternService } from '../../patterns/pattern.service';
import { of } from 'rxjs';

@Injectable()
export class PatternEffects {
  loadPatterns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PatternActions.loadPatterns),
      exhaustMap(() => this.patternService.getPatterns()),
      map((patterns) => PatternActions.loadPatternsSuccess({ patterns })),
      catchError((error) => of(PatternActions.loadPatternsFailure({ error })))
    );
  });

  constructor(
    private actions$: Actions,
    private patternService: PatternService
  ) {}
}
