import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Auth } from '../services/auth.service';

@Component({
  selector: 'shoppingKart',
  templateUrl: './shoppingKart.component.html',
  styleUrls: ['./shoppingKart.component.css'] 
})



export class ShoppingKart {

  constructor(private auth: Auth) {
  }


}