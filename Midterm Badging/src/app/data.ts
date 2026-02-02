import { Post } from './post';
import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Data {
  private API_URL = 'https://jsonplaceholder.typicode.com/posts';

  posts$!: Observable<Post[]>;

  constructor(private http: HttpClient) {
    this.posts$ = this.http.get<Post[]>(this.API_URL).pipe(
      shareReplay(1),
      catchError(err => {
        console.error('API error', err);
        throw err;
      })
    );
  }
}

