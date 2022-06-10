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

  defaultAnswer = 'no';
  defaultCountry = 'ua';

  // registerData = [];
  regUserData = {};
  isSubmitted = false;


  // ViewChild
  submitForm() {
    // console.log('submitted', this.myForm)
    // this.registerData.push(this.myForm.value)
    // console.log(this.registerData)
    this.isSubmitted = true;
    this.regUserData = this.myForm.value;
    this.myForm.reset();
  }


  // submitForm(myForm: NgForm) {
  //   console.log(
  //     'submitted', myForm.value
  //   )
  //   this.registerData.push(myForm.value)
  //   console.log(this.registerData)
  // };

  addRandomEmail() {
    const randomEmail = 'me@gmail.com';
    // this.myForm.setValue(
    //   {
    //     user:
    //     {
    //       email: randomEmail,
    //       password: ''
    //     },
    //     country: '',
    //     city: '',
    //     answer: '',
    //   }
    // )
    //====Так правильнее, не обновляется вся форма
    this.myForm.form.patchValue({
      user: { email: randomEmail, }
    })
  }
}
