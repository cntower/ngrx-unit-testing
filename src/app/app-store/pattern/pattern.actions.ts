import { createAction, props } from '@ngrx/store';

import { Pattern } from './pattern.model';

export const loadPatterns = createAction('[Pattern/UI] Load Patterns');

export const loadPatternsSuccess = createAction(
  '[Pattern/API] Load Patterns Success',
  props<{ patterns: Pattern[] }>()
);

export const loadPatternsFailure = createAction(
  '[Pattern/API] Load Patterns Failure',
  props<{ error: any }>()
);
