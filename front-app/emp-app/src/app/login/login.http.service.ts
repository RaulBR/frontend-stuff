import { HttpService } from "../service/http.service";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpLoginInterface } from "../interfaces/http.login.interface";

@Injectable()
export class LoginService implements HttpLoginInterface<User> {

    constructor(private httpService: HttpService) { }

    login(loginOnj: User) {
        return this.httpService.post<User>('user/login', loginOnj);
    }
    logout() {
        return this.httpService.delete('user/logout');
    }

    signUp(formData: User) {
        return this.httpService.post<User>('user', formData);
    }


}
