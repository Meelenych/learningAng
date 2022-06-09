import { ConsoleService } from "./console.service";
import { Injectable } from "@angular/core";

@Injectable()

export class CarsService {



  constructor(private consoleName: ConsoleService) { }

  cars = [
    { name: 'Ford', sold: true },
    { name: 'Mazda', sold: true },
    { name: 'Toyota', sold: true },
    { name: 'Fiat', sold: true }
  ];


  addCarToList(name) {
    this.cars.push({ name, sold: false })
    this.consoleName.log(`Car ${name} was added to the list`)
  }
}
