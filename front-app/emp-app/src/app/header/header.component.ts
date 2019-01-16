import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { LocalStorageService } from '../service/localStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
              private loginService:LoginService,
              private local:LocalStorageService) { }

  ngOnInit() {
  }
  logout(){
    this.local.empty();
      this.router.navigate(['']);
    this.loginService.logout().subscribe((res)=>{
      
    });
    
  }
}
