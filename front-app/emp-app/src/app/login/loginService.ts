import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class LoginService{
    logoutButtonSubject =new Subject<boolean>();
    constructor(){}

    userLogedIn(logedin:boolean){
         this.logoutButtonSubject.next(logedin);
        }
    }



