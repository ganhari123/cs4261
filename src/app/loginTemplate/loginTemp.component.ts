import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})

export class LoginComponent {
  form: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      username: '',
      password: ''
    });
  }
}