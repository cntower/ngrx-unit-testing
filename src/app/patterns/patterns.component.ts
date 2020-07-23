import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../app-store/reducers';
import * as fromPattern from '../app-store/pattern';

@Component({
  selector: 'app-patterns',
  template: `
  <h2>Design Patterns</h2>
    <p>
      {{ store.select(fromPattern.getAllPatterns) | async | json }}
    </p>
  `,
  styleUrls: ['./patterns.component.scss'],
})
export class PatternsComponent implements OnInit {
  fromPattern = fromPattern;
  constructor(public store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(fromPattern.loadPatterns());
  }
}
