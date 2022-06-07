import { Component } from '@angular/core';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  // canAddCar = false;

  // constructor() {
  //   setTimeout(() => {
  //     this.canAddCar
  //       = true
  //   }, 4000)
  // }

  // addCarStatus = '';
  // inputText = 'default text'

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Toyota', 'Opel'];
  // items = [
  //   { id: 345, name: 'water' },
  //   { id: 623, name: 'fire' },
  //   { id: 235, name: 'air' },
  //   { id: 236, name: 'earth' }
  // ];

  constructor() {
  }

  addCar() {
    // this.addCarStatus = 'Car was added!'
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }

  // onKeyUp(event: Event): void {
  //   console.log(event)
  //   this.inputText = (<HTMLInputElement>event.target).value
  // }

  // onKeyUp(value: any) {
  //   this.inputText = value;
  // }

  // onKeyUp(event: Event | KeyboardEvent): void {
  //   console.log(event)
  //   if (event.key === 'Enter') {
  //     // this.inputText = (<HTMLInputElement>event.target).value
  //     this.inputText = (event.target as HTMLInputElement).value
  //   }
  // }


  // onKeyUp(event: any) {
  //   this.inputText = (<HTMLInputElement>event.target).value
  // }
}

