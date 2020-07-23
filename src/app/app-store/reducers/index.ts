import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPattern from './../pattern';

export interface State {
  [fromPattern.patternsFeatureKey]: fromPattern.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromPattern.patternsFeatureKey]: fromPattern.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
