import { NewCmp } from './new-cmp/new-cmp';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myservice } from './myservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewCmp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_services_demo');

  todaydate;
  componentproperty;
  constructor(private myservice:Myservice) {
    this.todaydate = this.myservice.showTodayDate();
    this.componentproperty = this.myservice.serviceproperty;
  }
}
