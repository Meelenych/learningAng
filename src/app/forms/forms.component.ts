import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  answers = [
    {
      type: 'yes',
      text: 'Так'
    },
    {
      type: 'no',
      text: 'Ніт'
    },
  ];

}
