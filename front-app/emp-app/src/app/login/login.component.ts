import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service'
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private loginService: LoginService) { }
  onLogin(){
//     this.loginService.login().subscribe((res)=>{
//     this.router.navigate(['main']);
// },(err)=>{

// });
  }
  signup(){
    this.router.navigate(['signup']);

  }
  ngOnInit() {
  }

}
