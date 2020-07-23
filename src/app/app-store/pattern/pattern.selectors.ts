import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPattern from './pattern.reducer';

export const selectPatternState = createFeatureSelector<fromPattern.State>(
  fromPattern.patternsFeatureKey
);
export const getAllPatterns = createSelector(
  selectPatternState,
  fromPattern.selectAll
);
