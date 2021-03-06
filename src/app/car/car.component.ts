import { Component, Input, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  // selector: 'app-car', // как тег <app-car>
  // selector: '[app-car]', // атрибут к тегу <div app-car>
  selector: '.app-car', // как класс к тегу <div class = "app-car">
  templateUrl: './car.component.html',
  // template: `
  // <div><h1>Hi there!</h1></div> // шаблон может быть сразу внутри
  // `,
  styleUrls: ['./car.component.css'],
  styles: [`p {color:blue;}`],
  // можно писать стили прямо в массиве
})
export class CarComponent {

  // carName = 'Ford'
  // carModel = 'Sierra'
  // carYear = '1986'

  // getName() {
  //   return this.carName
  // }
  @Input() carItem: { name: string, year: number, model: string } = { name: '', year: 0, model: '' }

  // или так через элиас Allias
  // @Input('carItem') car: { name: string, year: number } = { name: '', year: 0 }

  // @ViewChild('carHeader') carHeading: ElementRef;
  // @ViewChild('carHeader') carHeading: any;
  @ContentChild('carHeader') carHeading: ElementRef;

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.carHeading)
  }


}
