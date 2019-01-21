import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.http.service';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../service/localStorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  showError:boolean
  constructor(private router: Router,
    private loginService: LoginService,
    private local :LocalStorageService) { }
  ngOnInit() {
      this.checkUser();
    }
  onLogin() {
    this.loginService.login(this.signupForm.value)
      .subscribe((res) => {
        this.local.setToLocalStorage(res);
        this.router.navigate(['main']);
        this.showError=false
      }, (err) => {
        this.showError= true;
      });
  }
  signup() {
    this.router.navigate(['signup']);

  }
  checkUser(){
    if(this.local.getToken()){
      this.router.navigate(['main']);
    }

  }
  

}
