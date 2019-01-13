import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
              private http:HttpService) { }
  onLogin(){
 //   this.logninService.onLogin();
   this.router.navigate(['main']);
  }
  signup(){
    this.router.navigate(['signup']);
    this.http.get('http://192.168.1.3:4000/','').subscribe((res)=>{
        console.log('here ');
    },(err)=>{

    });
  }
  ngOnInit() {
  }

}
