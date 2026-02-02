import { PipesPipe } from './../pipes-pipe';
import { CommonModule } from '@angular/common';
import { Post } from './../post';
import { Data } from './../data';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  imports: [CommonModule, PipesPipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  search$ = new BehaviorSubject<string>('');
  filteredPosts$!: Observable<Post[]>;

  constructor(private data: Data) {}

  ngOnInit() {
    this.filteredPosts$ = combineLatest([
      this.data.posts$,
      this.search$
    ]).pipe(
      map(([posts, search]) =>
        posts.filter(p =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.body.toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }

  onSearch(value: string) {
    this.search$.next(value);
  }

  error = false;
}
