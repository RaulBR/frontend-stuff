import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee/employee.http.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  @ViewChild('f') signupForm:NgForm;
  private subscription :Subscription
  constructor(private router:Router,
              private employeeService:EmployeeService) { 
                
              }
  onSubmit(){
    if(this.signupForm.valid){
      let formData = this.signupForm.value;
      if(formData._id){
        this.employeeService.editEmployee(formData)
        .subscribe((res)=>{
         // this.router.navigate(['main']);
        },(err)=>{
  
        });
      } else {
      delete formData._id
      this.employeeService.saveEmployee<Employee>(formData)
      .subscribe((res)=>{
        this.router.navigate(['main']);
      },(err)=>{

      });
    }
    }
  }
  onBack(){
    this.router.navigate(['main']);
  }

  ngOnInit() {
    this.loadDataFromEdit();
  }
  private loadDataFromEdit() {
    this.subscription = this.employeeService.editEmployeeSubject.subscribe((data) => {
      this.employeeService.getSpecificEmployee<Employee>(data).subscribe((result) => {
        this.signupForm.form.patchValue(result);
      });
    });
  }

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
