import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { HttpLoginService } from '../../service/http.service/login.http.service';
import { LocalStorageService } from '../../service/localStorage';
import { LoginService } from 'src/app/login/loginService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscriptions :Subscription;
  isLogedin = true;
  constructor(private router: Router,
              private httpLoginService: HttpLoginService,
              private loginService :LoginService,
              private local: LocalStorageService) { }

  ngOnInit():void {
   this.subscriptions= this.loginService.logoutButtonSubject.subscribe( responce=>{
      this.isLogedin = responce;
    });
  }

  logout() {
    this.httpLoginService.logout().subscribe((res) => {
      this.router.navigate(['']);
      this.isLogedin = false;
      this.local.empty();
    });

  }
  ngOnDestroy(): void {
   this.subscriptions.unsubscribe();
  }
}
