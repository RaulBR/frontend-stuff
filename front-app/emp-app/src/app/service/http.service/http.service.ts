import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../localStorage';
import { User } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Injectable()
export class HttpService implements OnDestroy {

    private supscriptions: Subscription;
    URL = "api/";
    constructor(private http: HttpClient,
        private local: LocalStorageService,
        private _location: Location) { }

    post<T>(endpoint, data) {
        endpoint = this.URL + endpoint;
        console.log('here ',this._location.path());
       
        return this.http.post<T>(endpoint, data, { headers: this.getHeadder() });

    }
    put<T>(endpoint, data) {
        return this.http.put<T>(endpoint, data, { headers: this.getHeadder() });
    }
    delete(endpoint) {
        endpoint = this.URL + endpoint;
        return this.http.delete(endpoint, { headers: this.getHeadder() });
    }
    edit<T>(endpoint, data) {
        endpoint = this.URL + endpoint;
        return this.http.put<T>(endpoint, data);
    }
    get<T>(endpoint) {
        endpoint = this.URL + endpoint;
        return this.http.get<T>(endpoint, { headers: this.getHeadder() });
    }
    isLoggedId<T>(endpoint) {
        endpoint = this.URL + endpoint;
        return this.http.get<T>(endpoint, { headers: this.getHeadder(), observe: 'response' });
    }
    getHeadder() {
        let token: string = this.local.getToken();
        if (!token) {
            this.supscriptions = this.local.tokenEmit.subscribe((res: User) => {
                token = res.token
            });
        }
        if (!token) {
            return {}
        } else {
            return new HttpHeaders()
                .append('Authorization', token)
                .append('Content-Type', 'application/json')
        }


    }

    ngOnDestroy(): void {
        this.supscriptions.unsubscribe();
    }
}