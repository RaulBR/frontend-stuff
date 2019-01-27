import { User } from "../shared/models/user.model";
import { Subject } from "rxjs";

export class LocalStorageService {
    tokenEmit = new Subject();
    setToLocalStorage(user: User) {
        localStorage.setItem("user", user.email);
        localStorage.setItem("token", user.token);
        localStorage.setItem("id", user._id);
        this.tokenEmit.next(user);
    }

    getToken() {
        return localStorage.getItem('token');
        
    }

    getId() {
        return localStorage.getItem('id');

    }

    getEmail() {
        return localStorage.getItem('user');

    }

    getUserObj() {
        let user: User;
        user.email = localStorage.getItem('user');
        user.token = localStorage.getItem('token');
        user._id = localStorage.getItem('id');
        return user;
    }

    empty() {
        localStorage.clear();
    }
}