import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceService } from '../auth-service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fix: Use styleUrls instead of styleUrl
})
export class LoginComponent {

  constructor(
    private service: ServiceService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
 
  login() {
    const emailControl = this.loginForm.get('email');
    const passwordControl = this.loginForm.get('password');
  
    const email = emailControl ? emailControl.value : '';
    const password = passwordControl ? passwordControl.value : '';

    this.service.login({ email, password }).subscribe(
      (res) => {
        console.log(res); 
    
        if (res && res.token){
          console.log('Welcome successfully');
          this.router.navigate(['/Admin']);
        } else {
          console.error('Login failed. Please check your credentials.');
        }
      },
      (error) => {
        console.error(error);
        console.error('Something went wrong. Please try again later.');
      }
    );
    }}    