import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../app-store/reducers';
import * as fromPattern from '../app-store/pattern';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pattern } from '../app-store/pattern/pattern.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss'],
})
export class PatternsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'type'];
  dataSource = new MatTableDataSource<Pattern>();
  patterns$ = this.store.select(fromPattern.getAllPatterns).pipe(
    tap((patterns) => {
      this.dataSource.data = patterns;
    })
  );

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.store.dispatch(fromPattern.loadPatterns());
  }

  constructor(public store: Store<State>) {}
}
