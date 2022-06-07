import { Component, Input } from '@angular/core';

@Component({
  // selector: 'app-car', // как тег <app-car>
  // selector: '[app-car]', // атрибут к тегу <div app-car>
  selector: '.app-car', // как класс к тегу <div class = "app-car">
  templateUrl: './car.component.html',
  // template: `
  // <div><h1>Hi there!</h1></div> // шаблон может быть сразу внутри
  // `,
  styleUrls: ['./car.component.css'],
  styles: [`p {color:red;}`] // можно писать стили прямо в массиве
})
export class CarComponent {

  // carName = 'Ford'
  // carModel = 'Sierra'
  // carYear = '1986'

  // getName() {
  //   return this.carName
  // }
  @Input() carItem: { name: string, year: number } = { name: '', year: 0 }

  // или так чере элиас Allias
  // @Input('carItem') car: { name: string, year: number } = { name: '', year: 0 }
}
