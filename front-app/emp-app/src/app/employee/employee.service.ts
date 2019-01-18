import { Injectable } from "@angular/core";
import { HttpService } from "../service/http.service";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService {
    constructor(private httpService: HttpService) { }

    getEmployees() {
        return this.httpService.get<Employee[]>('employee');
    }
    saveEmployee<Employee>(formData: Employee) {
        return this.httpService.post<Employee>('employee', formData);

    }
}