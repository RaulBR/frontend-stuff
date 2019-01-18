import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './localStorage';
import { User } from '../models/user.model';
import { Subscribable, Subscription } from 'rxjs';
@Injectable()
export class HttpService implements OnDestroy {
    private supscriptions: Subscription;
    URL = "http://localhost:4000/";
    constructor(private http: HttpClient,
                private local: LocalStorageService) { }

    post<T>(endpoint, obj) {
        endpoint = this.URL + endpoint;
        return this.http.post<T>(endpoint, obj, { headers: this.getHeadder() });

    }
    delete<T>(endpoint) {
        endpoint = this.URL + endpoint;
        return this.http.delete<T>(endpoint, { headers: this.getHeadder() });
    }
    edit<T>(endpoint, obj) {
        endpoint = this.URL + endpoint;
        return this.http.put<T>(endpoint, obj);
    }
    get<T>(endpoint) {
        endpoint = this.URL + endpoint;
        return this.http.get<T>(endpoint, { headers: this.getHeadder() });
    }

    getHeadder() {
        let token: string = this.local.getToken();
        if (!token) {
            this.supscriptions = this.local.tokenEmit.subscribe((res: User) => {
                token = res.token
            })
        }
        return new HttpHeaders()
            .append('Authorization', token);

    }

    ngOnDestroy(): void {
        this.supscriptions.unsubscribe();
    }
}