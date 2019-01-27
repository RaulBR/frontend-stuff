import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { LoginService } from "./login.http.service";


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: LoginService,
        private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.isAuthenticated().pipe(map((e: any) => {
            if (e.email) {
                return true;
            } else {
                this.router.navigate([''])
            }
        }, er => {
            this.router.navigate([''])
        }));










    }
}
