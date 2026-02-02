import { PipesPipe } from './../pipes-pipe';
import { map } from 'rxjs';
import { Data } from './../data';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PipesPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  latestPosts$;

  constructor(private data: Data) {
    this.latestPosts$ = this.data.posts$.pipe(
      map(posts => posts.slice(0, 5))
    );
  }
}
