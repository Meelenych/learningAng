import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

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

  form: FormGroup;

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      country: new FormControl(''),
      city: new FormControl(''),
      answer: new FormControl(''),
    })

  }
  onSubmit() {
    console.log('submitted', this.form)
  }


}
