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
  carYear = 2022;
  // addCarStatus = false;
  cars = [
    { name: 'Ford', year: 2013 },
    { name: 'Audi', year: 2018 },
    { name: 'Porsche', year: 2015 },
    { name: 'Lamborgini', year: 2017 }
  ]

  // cars = ['Ford', 'Audi', 'BMW', 'Toyota', 'Opel'];
  // items = [
  //   { id: 345, name: 'water' },
  //   { id: 623, name: 'fire' },
  //   { id: 235, name: 'air' },
  //   { id: 236, name: 'earth' }
  // ];

  // dates = [
  //   new Date(2022, 15, 5).toDateString(),
  //   new Date(2000, 30, 6).toDateString(),
  //   new Date(2015, 22, 2).toDateString(),
  //   new Date(2021, 31, 12).toDateString(),
  //   new Date(2022, 14, 2).toDateString(),
  // ]

  constructor() {
  }

  addCar() {
    // this.addCarStatus = 'Car was added!'
    // this.addCarStatus = true;
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2022;
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

