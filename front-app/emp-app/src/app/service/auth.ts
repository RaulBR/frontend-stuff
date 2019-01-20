import { HttpService } from "./http.service";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {
  
    constructor(private http: HttpService){

    }
    isAuthenticated(){
       return this.http.get('user/me')
        
         
        
    }

}