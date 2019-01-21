import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.http.service';
import { LocalStorageService } from '../service/localStorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogedin = true;
  constructor(private router: Router,
              private loginService: LoginService,
              private local: LocalStorageService) { }

  ngOnInit() {
    if (this.local.getToken()) {
      this.isLogedin = true;
      return
    }else{
    this.local.tokenEmit.subscribe((resoult) => {
      this.isLogedin = true;
    })
    }
  }

  logout() {
    this.loginService.logout().subscribe((res) => {
      this.router.navigate(['']);
      this.isLogedin = false;
      this.local.empty();
    });

  }
}
