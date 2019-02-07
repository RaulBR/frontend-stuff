import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpLoginService } from '../../service/http.service/login.http.service';
import { LocalStorageService } from 'src/app/service/localStorage';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit ,OnDestroy{

  disabled = true;
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('password2') password2;
  @ViewChild('password') password;
  constructor(private httpLoginService: HttpLoginService,
              //mearge http with login service
              private local: LocalStorageService,
              private router: Router,
              private snack: SnackBarService) { }

  ngOnInit() {}

  checkPass() {
  
   this.password2.value === this.password.value ?  this.disabled = true:
                                                   this.disabled = false;
                                                   
    
    if(!this.disabled){
      this.snack.openSnackBar("Passwards don't mach",50000)
    }else{
     
     if(this.password.value < 5)  this.snack.openSnackBar("Passwards to short",50000)
    }
    if(this.disabled) this.snack.close();
  }
  onBack() {
    this.router.navigate(['']);
  }
  onSubmit() {
    if (this.disabled && this.signupForm.valid) {
      let formData = this.signupForm.value;
      delete formData.password2;
      this.httpLoginService.signUp(formData)
      .subscribe((res) => {
        this.local.setToLocalStorage(res);
        this.router.navigate(['main']);
      }, (err) => {
        this.snack.openSnackBarStandard('User exists')
      });
    }

  }
  ngOnDestroy() {
    this.snack.close();
  }


}
