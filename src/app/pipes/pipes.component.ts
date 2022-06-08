import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name = 'Taras';
  pi = Math.PI;
  money = 500;
  date = new Date();
  amount = 0.57;
  object = {
    name: 'Taras',
    surname: 'Demchenko',
    nested: {
      car: 'Ford Focus',
      hobby: 'Driving',
    }
  }
}
