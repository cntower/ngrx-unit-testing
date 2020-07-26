import * as Actions from './pattern.actions';

fdescribe('Store > Pattern > PatternActions', () => {
  it('SHOULD create a loadPatterns action', () => {
    const action = Actions.loadPatterns;
    expect(action.type).toEqual('[Pattern/UI] Load Patterns');
  });
  it('SHOULD create a loadPatternsSuccess action', () => {
    const action = Actions.loadPatternsSuccess({ patterns: [] });
    expect(action.type).toEqual('[Pattern/API] Load Patterns Success');
  });
  it('SHOULD create a loadPatternsFailure action', () => {
    const action = Actions.loadPatternsFailure({ error: {} });
    expect(action.type).toEqual('[Pattern/API] Load Patterns Failure');
  });
});
