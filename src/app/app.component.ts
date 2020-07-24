import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-patterns></app-patterns> `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
