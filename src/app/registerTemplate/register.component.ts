import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})

export class RegisterComponent {
  form: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      username: '',
      password: '',
      confpassword: ''
    });
  }
}