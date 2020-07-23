import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PatternActions from './pattern.actions';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Pattern } from './pattern.model';
import { of } from 'rxjs';

@Injectable()
export class PatternEffects {
  loadPatterns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PatternActions.loadPatterns),
      exhaustMap(() => this.http.get<Pattern[]>('api/patterns')),
      map((patterns) => PatternActions.loadPatternsSuccess({ patterns })),
      catchError((error) => of(PatternActions.loadPatternsFailure({ error })))
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
