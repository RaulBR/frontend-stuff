import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../service/localStorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  constructor(private router: Router,
    private loginService: LoginService,
    private local :LocalStorageService) { }
  onLogin() {

    this.loginService.login(this.signupForm.value)
      .subscribe((res) => {
        this.local.setToLocalStorage(res)
        .then(()=>{
            this.router.navigate(['main'])
      })
      
      }, (err) => {
        console.log('error ',err)
      });
  }
  signup() {
    this.router.navigate(['signup']);

  }
  ngOnInit() {
  }

}
