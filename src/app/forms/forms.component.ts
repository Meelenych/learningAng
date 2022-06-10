import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  registerData = [];

  submitForm(myForm: NgForm) {
    console.log(
      'submitted', myForm.value
    )
    this.registerData.push(myForm.value)
    console.log(this.registerData)
  };

}
