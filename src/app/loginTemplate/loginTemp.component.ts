import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Auth } from '../services/auth.service';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})

export class LoginComponent {
  form: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder, private auth: Auth) {
    this.form = fb.group({
      username: '',
      password: ''
    });
  }
}