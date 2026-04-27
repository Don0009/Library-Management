import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  hidepassword: boolean = true;
  registerForm : FormGroup;

  constructor(private fb: FormBuilder) {

    this.registerForm = fb.group({
      firstName:fb.control('',[Validators.required]),
      lastName:fb.control('last',[Validators.required]), 
      email:fb.control('',[Validators.required]),
      mobile:fb.control('',[Validators.required]),
      password:fb.control('',[Validators.required]),
      rpassword:fb.control('',[Validators.required])
    });
   }
    
   register(){
     const data = console.log(this.registerForm.value);
   }

}
