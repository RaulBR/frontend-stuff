import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpLoginService } from '../service/http.service/login.http.service';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../service/localStorage';
import { LoginService } from './loginService';
import { SnackBarService } from '../shared/snackbar/snackbar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {

  @ViewChild('f') signupForm: NgForm;
  showError:boolean
  constructor(private router: Router,
    private httpLoginService: HttpLoginService,
    private loginService :LoginService,
    //mearge httplogin woth login service
    private local :LocalStorageService,
    private snack:SnackBarService) { }
  ngOnInit() {
    this.loginService.userLogedIn(false);
    }
  onLogin() {
    this.httpLoginService.login(this.signupForm.value)
      .subscribe((res) => {
        this.local.setToLocalStorage(res);
        this.router.navigate(['main']);
        this.loginService.userLogedIn(true);
       
      }, (err) => {
        this.snack.openSnackBar('Problem signing in',50000);
      });
  }
  signup() {
    this.router.navigate(['signup']);

  }
  ngOnDestroy(): void {
    this.loginService.userLogedIn(true);
    this.snack.close();
  }  

}
