import { User } from './user.model';
import { Httpclient } from './httpclient';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-httpclient-demo');
  httpusers: User[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUserRemotely().subscribe((data) => {
      this.httpusers = data;
    });
  }
}
