import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class HttpService{
    URL = "http://localhost:4000/";
    constructor(private http: HttpClient) { }
    // header = new HttpHeaders().set();
    post(endpoint,obj){
        endpoint=this.URL+endpoint;
        return this.http.post(endpoint,obj
            // ,{headers:this.header}
            );

    }
    delete(endpoint,obj){
        endpoint=this.URL+endpoint;
        return this.http.delete(endpoint,obj);
    }
    edit(endpoint,obj){
        endpoint=this.URL+endpoint;
        return this.http.put(endpoint,obj);
    }
    get(endpoint){
        endpoint=this.URL+endpoint;
        return this.http.get(endpoint);
    }
   
}