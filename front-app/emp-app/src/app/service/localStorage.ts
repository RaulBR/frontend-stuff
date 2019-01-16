import { User } from "../models/user.model";

export class LocalStorageService {

    setToLocalStorage(user: User) {
        localStorage.setItem("user", user.email);
        localStorage.setItem("token", user.token);
        localStorage.setItem("id", user._id);
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
        user.email = this.getEmail();
        user.token = this.getToken();
        user._id = this.getId();
        return user;
    }

    empty(){
        localStorage.clear();
    }
}