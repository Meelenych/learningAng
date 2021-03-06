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
      // email: new FormControl('', [Validators.required, Validators.email]),
      // password: new FormControl('', Validators.required),
      // country: new FormControl(''),
      // city: new FormControl(''),
      // answer: new FormControl(''),

      //Grouping inputs
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForAlreadyUsedEmail),
        //checkForAlreadyUsedEmail асинхронный, поэтому в общий массив валидаторов не кидаем
        password: new FormControl('', [Validators.required, this.checkPassLength.bind(this)]),
        //если применяем переменные для проверки и вывода инфы об ошибках, нужно валидатору привязать контекст .bind(this)
      }),
      country: new FormControl(''),
      city: new FormControl(''),
      answer: new FormControl(''),
    })

  }
  onSubmit() {
    console.log('submitted', this.form)
    // this.form.reset()
  }


  //own validation
  //this method returns either {'errorCode:true'} or null undefined
  charsCount = 5;

  checkPassLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return { 'lengthError': true }
    }
    return null
  }

  //метод должен возвращать Promise или Observable
  checkForAlreadyUsedEmail(control: FormControl): Promise<any> {

    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({
            'emailIsUsed': true
          })
        } else {
          resolve(null)
        }
      }, 2000)
    })
  }
}
