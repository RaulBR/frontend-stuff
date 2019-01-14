
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class HttpService{
    URL = "http://localhost:4000/";
    constructor(private http: Http) { }

    save(endpoint,obj){
        this.URL=this.URL+endpoint;
        console.log(endpoint);
        return this.http.post(this.URL,obj);

    }
    delete(url,obj){
        return this.http.delete(url,obj);
    }
    edit(url,obj){
        return this.http.put(url,obj);
    }
    get(url){
        return this.http.get(this.URL);
    }
}