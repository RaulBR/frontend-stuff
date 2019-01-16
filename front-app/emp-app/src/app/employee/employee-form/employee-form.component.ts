import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  @ViewChild('f') signupForm:NgForm;
  constructor(private router:Router,
              private employeeService:EmployeeService) { }
  onSubmit(){
    
    if(this.signupForm.valid){
      let formData = this.signupForm.value;
      delete formData.password2;
      this.employeeService.saveEmployee<Employee>(formData)
      .subscribe((res)=>{
        this.router.navigate(['main']);
      },(err)=>{

      });
    }
  }
  onBack(){
    this.router.navigate(['main']);
  }

  ngOnInit() {
  }

}
