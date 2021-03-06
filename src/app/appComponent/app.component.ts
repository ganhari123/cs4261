import { Component } from '@angular/core';
import { Auth } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  constructor(private auth: Auth) {
  	this.auth.handleAuthentication();
  }
}
