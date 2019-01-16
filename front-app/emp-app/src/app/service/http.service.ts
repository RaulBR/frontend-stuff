import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './localStorage';
@Injectable()
export class HttpService {
    URL = "http://localhost:4000/";
    constructor(private http: HttpClient,
        private local: LocalStorageService) { }
    header = new HttpHeaders()
    .append('Authorization', this.local.getToken());
    post<T>(endpoint, obj) {
        endpoint = this.URL + endpoint;
        return this.http.post<T>(endpoint, obj, { headers: this.header });

    }
    delete<T>(endpoint) {
        endpoint = this.URL + endpoint;
        return this.http.delete<T>(endpoint,{ headers: this.header });
    }
    edit<T>(endpoint, obj) {
        endpoint = this.URL + endpoint;
        return this.http.put<T>(endpoint, obj);
    }
    get<T>(endpoint) {
        endpoint = this.URL + endpoint;
        return this.http.get<T>(endpoint, { headers: this.header });
    }
    getHeadder() {
        return 
    //    .append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
       
       
       
    }
}