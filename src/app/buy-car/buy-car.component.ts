import { Component, OnInit } from '@angular/core';
import { ConsoleService } from './console.service';
import { CarsService } from './cars.service'

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css'],
  providers: [ConsoleService]
  //правильное использование сервиса INJECTION
})
export class BuyCarComponent implements OnInit {

  constructor(private service: ConsoleService, private carsService: CarsService) { }
  //правильное использование сервиса INJECTION

  cars = [];


  ngOnInit() {
    this.cars = this.carsService.cars
  }

  addCarToList(name) {
    this.carsService.addCarToList(name)
  }

  onAction(action: string, carName) {
    action === 'buy' ? carName.sold = true : carName.sold = false;
    // const service = new ConsoleService();
    // service.log(`${carName.name} was ${carName.sold ? 'bought' : 'sold'}`);
    //неправильное использование сервиса

    this.service.log(`${carName.name} was ${carName.sold ? 'bought' : 'sold'}`);
    //правильное использование сервиса INJECTION
  }



}
