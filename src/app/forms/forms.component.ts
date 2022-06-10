import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  // ViewChild
  @ViewChild('myForm') myForm: NgForm;

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


  // ViewChild
  submitForm() {
    console.log('submitted', this.myForm)
    this.registerData.push(this.myForm.value)
    console.log(this.registerData)
  }


  // submitForm(myForm: NgForm) {
  //   console.log(
  //     'submitted', myForm.value
  //   )
  //   this.registerData.push(myForm.value)
  //   console.log(this.registerData)
  // };

}
