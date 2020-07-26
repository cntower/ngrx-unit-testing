import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pattern } from '../app-store/pattern/pattern.model';

@Injectable({ providedIn: 'root' })
export class PatternService {
  private url = 'api/patterns';

  constructor(private http: HttpClient) {}

  getPatterns(): Observable<Pattern[]> {
    return this.http.get<Pattern[]>(this.url);
  }
}
