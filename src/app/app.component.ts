import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <span style="display: block">{{ title }} app is running!</span>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-unit-testing';
  private patternsUrl = 'api/patterns'; // URL to web api

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getPatterns().subscribe((r) => console.log(r));
  }

  getPatterns(): Observable<any[]> {
    return this.http.get<any[]>(this.patternsUrl);
  }
}
