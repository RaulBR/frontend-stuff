import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { LocalStorageService } from 'src/app/service/localStorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  disabled = true;
  @ViewChild('f') signupForm:NgForm;
  @ViewChild('password2') password2;
  @ViewChild('password') password;
  constructor(private loginService:LoginService,
              private local: LocalStorageService,
              private router:Router) { }

  ngOnInit() {
    
  }
  checkPass(){
    this. disabled = true;
    if(this.password2.value !== this.password.value){
      this.disabled=false;
    }
   
  }
  onSubmit(){
    if(this.disabled && this.signupForm.valid){
      let formData = this.signupForm.value;
      delete formData.password2;
      this.loginService.signUp(formData).subscribe((res)=>{
        this.local.setToLocalStorage(res)
          this.router.navigate(['main']);
       
       
        
      },(err)=>{

      });
    }
    
  }

}
