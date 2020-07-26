# Ngrx Unit Testing

The purpose of this project is a research current ways to testing the NgRx store in Angular application.

## Testing methodology

The article [NgRx Unit Test Theory](https://medium.com/@joshblf/ngrx-unit-test-theory-c5ad8ba7a8e1) by Josh Hicks will be used as the unit testing methodology.

### As we are writing tests we can ask ourselves questions about what we’re doing:

1. What specific unit am I trying to test right now?
2. What does this unit do?
3. What parameters does it take in?
4. What should it return?
5. What happens when something goes wrong?
6. How can I break it on purpose to test the error state?
7. What tools do I have available to test this effectively?

These questions will be the template for creating unit tests as we go.


### Testing Actions

1. The specific unit I’m trying to test is the Action creator function.
2. Action is responsible for express unique events that happen throughout your application. `createAction` function creates a configured Creator function that, when called, returns an object in the shape of the Action interface.
3. It takes in parameters type that describes the action that will be dispatched and config - additional metadata needed for the handling of the action.
4. It should return a configured Creator function.
5. If something goes wrong we should get a Type error.
6. If set config with Props<P> function TS will check of payload type error.
7. We can test that all action types are according to them literals.


### Testing Effects

1. The specific unit is the Effect observable.
2. This unit listens for an action type, performs a side-effect, and then usually returns an observable of an Action.
3. It takes in an Action with a type and an optional payload.
4. It usually returns an observable of an Action.
5. If something goes wrong there could be several errors from several different points. It could be incorrect Action payloads,  failed HTTP calls, bad data transforms, etc.
6. Depending on the effect I could pass in the incorrect payload.
7. I can use provideMockActions to mock the latest action in the Actions stream. I can “expect” a certain action to be returned. I can “spy” on service calls that happen inside the side-effect.


### Testing Reducers

1. The unit is the reducer function.
2. The unit takes in 2 arguments and uses a switch statement to return an object.
3. The unit takes a State argument which is the current data object in memory, and an Action, which has a type and an optional payload.
4. It must return an object which represents the new State.
5. If something goes wrong there will most likely be a Type error.
6. To break it on purpose I could purposely omit properties in the new State object. Or I could omit an argument.
7. This can be called like a function because it is! This means I can mock the arguments and then “expect” the returned object to equal my mock data.


### Testing Selectors

1. The unit is the selector function.
2. The unit uses the NgRx createSelector method which accepts a varying number of state slices, up to 8, and then returns a slice of State based on those arguments.
3. It accepts up to 8 arguments which are also selector functions, and a “props” value that can be used for deriving state.
4. It should return a piece of state, which could be anything.
5. If something goes wrong there could be an error regarding Types, missing state, and inner logic errors if using “derived state”.
6. To break a Selector, you can pass in bad arguments or incorrect props values.
7. NgRx createSelector functions come with the ability to use the “.projector()” method which allows you to easily pass in mock arguments, and “expect” a return State value.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
