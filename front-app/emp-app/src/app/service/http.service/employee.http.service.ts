import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Employee } from "../../shared/models/employee.model";
import { BehaviorSubject } from "rxjs";
import { HttpEmployeeInterface } from "./interfaces/http.employee.interface";

@Injectable()
export class HttpEmployeeService implements HttpEmployeeInterface<Employee>  {
  editEmployeeSubject = new BehaviorSubject('');
    constructor(private httpService: HttpService) { }

    getEmployees() {
        return this.httpService.get<Employee[]>('employee');
    }
    saveEmployee<Employee>(formData: Employee) {
        return this.httpService.post<Employee>('employee', formData);

    }
    
    deleteEmployee(id){
            return this.httpService.delete('employee/'+id);
    }

    editEmployee(employee:Employee){
        return this.httpService.post<Employee>('employee/'+employee._id ,employee);

    }

    getSpecificEmployee<Employee>(id){
        return this.httpService.get<Employee>('employee/'+id);
    }

    editEmployeeEmit(id){
        this.editEmployeeSubject.next(id);

    }
}