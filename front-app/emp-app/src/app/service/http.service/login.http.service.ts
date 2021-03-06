import { HttpService } from "./http.service";
import { Injectable } from "@angular/core";
import { User } from "../../shared/models/user.model";
import { HttpLoginInterface } from "./interfaces/http.login.interface";

@Injectable()
export class HttpLoginService implements HttpLoginInterface<User> {

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

    isAuthenticated(url) {
        return this.httpService.post('user/me',{url:url})

    }

}
