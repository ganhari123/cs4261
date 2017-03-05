import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PostsService } from '../services/reqpage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})

export class RegisterComponent {
  form: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder, private requestPage: PostsService, private router: Router) {
    this.form = fb.group({
      username: '',
      password: '',
      confpassword: ''
    });
  }
  
  public callService() {
    this.requestPage.getAllPosts().subscribe(response => {
      console.log(response);
      if (response.a === 'login') {
        this.router.navigateByUrl('/login');
      }
    });
  }
}