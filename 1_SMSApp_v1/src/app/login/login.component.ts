import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  constructor(private user:UserService,private r:Router){}
  perform_login() {
    if (this.user.perform_login(this.username,this.password)) {
      this.message = 'Login success';
      this.user.createSessionAndStoreValue(this.username,true)
      // show students view to users..
      this.r.navigate(['students'])  //this is programatic naviagtion.
    
    } else {
      this.message = 'Login failed';
      this.user.createSessionAndStoreValue('guest',false)
    }
  }
}
