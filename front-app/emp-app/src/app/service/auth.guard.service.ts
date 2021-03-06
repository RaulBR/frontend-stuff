import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { HttpLoginService } from "./http.service/login.http.service";


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: HttpLoginService,
        private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.auth.isAuthenticated(route.url[0].path).pipe(map((e: any) => {
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
