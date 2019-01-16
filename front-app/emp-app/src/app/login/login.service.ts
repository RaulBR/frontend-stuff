import { HttpService } from "../service/http.service";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable()
export class LoginService {

    constructor(private httpService: HttpService) { }

    login(loginOnj: User) {
        return this.httpService.post<User>('user/login', loginOnj);
    }
    logout(){
        return this.httpService.delete<User>('user/logout');
    }

    signUp(formData: User) {
       return this.httpService.post<User>('user', formData);
    }
  
    
}
