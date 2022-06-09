export class CarsService {

  cars = [
    { name: 'Ford', sold: true },
    { name: 'Mazda', sold: true },
    { name: 'Toyota', sold: true },
    { name: 'Fiat', sold: true }
  ];


  addCarToList(name) {
    this.cars.push({ name, sold: false })
  }

}
