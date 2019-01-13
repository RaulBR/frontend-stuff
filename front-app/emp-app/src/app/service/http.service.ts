import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService{
    constructor(private http: Http) { }

    save(url,obj){
        return this.http.post(url,obj);
    }
    delete(url,obj){
        return this.http.delete(url,obj);
    }
    edit(url,obj){
        return this.http.put(url,obj);
    }
    get(url,params){
        return this.http.get(url);
    }
}