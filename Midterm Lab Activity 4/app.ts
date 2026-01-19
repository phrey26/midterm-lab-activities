import { CommonModule } from '@angular/common';
import { Employee } from './employee';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'services-demo';
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  constructor(private _employeeService: Employee
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
