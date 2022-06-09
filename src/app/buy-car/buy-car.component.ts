import { Component } from '@angular/core';
import { ConsoleService } from './console.service';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css'],
  providers: [ConsoleService]
  //правильное использование сервиса INJECTION
})
export class BuyCarComponent {

  constructor(private service: ConsoleService) { }
  //правильное использование сервиса INJECTION

  cars = [
    { name: 'Ford', sold: true },
    { name: 'Mazda', sold: true },
    { name: 'Toyota', sold: true },
    { name: 'Fiat', sold: true }
  ];


  addCarToList(carName) {
    this.cars.push({ name: carName, sold: false })
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
