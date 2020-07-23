import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Pattern } from './pattern.model';
import * as PatternActions from './pattern.actions';

export const patternsFeatureKey = 'patterns';

export interface State extends EntityState<Pattern> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Pattern> = createEntityAdapter<Pattern>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(PatternActions.loadPatternsSuccess,
    (state, action) => adapter.setAll(action.patterns, state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
