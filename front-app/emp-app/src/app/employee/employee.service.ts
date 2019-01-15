import { Injectable } from "@angular/core";
import { HttpService } from "../service/http.service";

@Injectable()
export class EmployeeService{
    constructor(private httpService: HttpService){}

    getEmployees(){
        return this.httpService.get('employee');
    }
}