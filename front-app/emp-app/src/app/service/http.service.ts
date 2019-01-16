import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from './localStorage';
@Injectable()
export class HttpService {
    URL = "http://localhost:4000/";
    constructor(private http: HttpClient,
        private local: LocalStorageService) { }
    header = this.getHeadder() ;
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
        let token = this.local.getToken();
        return new HttpHeaders()
    //     .set("Access-Control-Allow-Origin", "*")
    //     .append("Access-Control-Allow-Credentials", "true")
    //    .append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    //    .append('Access-Control-Allow-Headers', 'Authorization')
    //    .append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
       .append('Authorization', token);
       
       
    }
}