import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hidepassword: boolean = true;
  
  loginForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required])
    });
  }

  login(){
    const data = console.log(this.loginForm.value);
  }
}
