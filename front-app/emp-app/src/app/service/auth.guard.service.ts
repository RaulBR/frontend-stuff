import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

import { HttpResponse } from "@angular/common/http";
@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthService,
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
