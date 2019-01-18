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
  isLogedin = true;
  constructor(private router: Router,
              private loginService: LoginService,
              private local: LocalStorageService) { }

  ngOnInit() {
    console.log(this.local.getToken())
    if (this.local.getToken()) {
      this.isLogedin = true;
    }
    this.local.tokenEmit.subscribe((resoult) => {
      this.isLogedin = true;
    })
  }

  logout() {
    this.isLogedin = false;
    this.local.empty();
    this.router.navigate(['']);
    this.loginService.logout().subscribe((res) => {

    });

  }
}
