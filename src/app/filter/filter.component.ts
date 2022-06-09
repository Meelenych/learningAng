import { Component } from '@angular/core';
import 'rxjs'
import { Observable } from 'rxjs';
import { of } from 'rxjs';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  searchCar = '';

  cars = [
    { name: 'Volkswagen', year: 2014, model: 'Golf' },
    { name: 'Ford', year: 2012, model: 'Focus' },
    { name: 'Audi', year: 2018, model: 'Q7' },
    { name: 'Volkswagen', year: 2014, model: 'Amarok' },
    { name: 'Porsche', year: 2015, model: "Panamera" },
    { name: 'Lamborgini', year: 2017, model: 'Diablo' },
    { name: 'Ford', year: 2018, model: 'Explorer' },
    { name: 'Lamborgini', year: 2017, model: 'Aventador' },
    { name: 'Volkswagen', year: 2014, model: 'Touareg' },
    { name: 'Ford', year: 2019, model: 'Raptor' },
    { name: 'Lamborgini', year: 2017, model: 'Countach' },
    { name: 'Volkswagen', year: 2014, model: 'New Beetle' },
  ];

  // title = '';
  // asyncTitle: string = Observable.of('Async title 3 seconds')
  //   .delay(3000)
  //   .subscribe(str => this.title = str)


  asyncTitle = Observable.of('Async title 3 seconds')
    .delay(3000)



  addCar() {
    this.cars.push({
      name: 'New car',
      year: 2014,
      model: 'Brand new'
    })
  }
}
