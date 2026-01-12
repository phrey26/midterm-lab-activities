import { CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  imports: [KeyValuePipe, DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, PercentPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();

  name = 'Humphrey Huet';
  price = 20000;

  Champs = ["Zed", "Yasuo", "Leblanc", "Yone", "Akali"];

  decimalNum1: number = 8.76416874964156498
  decimalNum2: number = 5.43333333333

  HealthValue: number = 0.4895; //percentage value
  ManaPool: number = 1.74964567; //LargeValue

  champDetail = {
    name: 'Zed',
    position: 3,
    role: 'Assasin',
    player: 'Faker'
  }

  scores = {
    '2': 'Bjergsen',
    '1': 'Faker',
    '3': 'Chovy'
  }
}
