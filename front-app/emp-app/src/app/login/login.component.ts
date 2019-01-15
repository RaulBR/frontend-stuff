import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  constructor(private router: Router,
    private loginService: LoginService) { }
  onLogin() {

    this.loginService.login(this.signupForm.value)
      .subscribe((res) => {
       
        // this.router.navigate(['main']);
      }, (err) => {

      });
  }
  signup() {
    this.router.navigate(['signup']);

  }
  ngOnInit() {
  }

}
