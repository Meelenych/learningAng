import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  headerText: string = 'Create your directives!';

  names = ['Scorpion', 'Sub Zero', 'Lu Kang', 'Meelena', 'Kitana', 'Johnny Cage', 'Reptile', 'Raiden'];
  current = 'Default'

  onClick(name: string) {
    this.current = name;
  }

}
