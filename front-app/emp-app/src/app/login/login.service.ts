import { HttpService } from "../service/http.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService{

    constructor( private httpSe:HttpService){}

     login(){
        //return  this.http.post()
     }

     signUp(formData:User){
         this.httpSe.get('').subscribe(res=>{

         })
        this.httpSe.save('user',formData).subscribe(res=>{
            console.log(res)
        })
       
     }
    }



    export interface User{
        email:String,
        passwoar:String
    }
