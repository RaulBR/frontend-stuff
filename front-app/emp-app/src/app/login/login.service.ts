import { HttpService } from "../service/http.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {

    constructor(private httpService: HttpService) { }

    login(loginOnj:User) {
        return this.httpService.post('user/login', loginOnj);
    }
    logout(){
        return this.httpService.delete('user/logout',{});
    }

    signUp(formData: User) {
       return this.httpService.post('user', formData);
    }
}



export interface User {
    email: String,
    passwoar: String
}
