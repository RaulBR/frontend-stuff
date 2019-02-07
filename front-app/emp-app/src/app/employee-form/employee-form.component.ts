import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/models/employee.model';
import { Subscription } from 'rxjs';
import { HttpEmployeeService } from '../service/http.service/employee.http.service';
import { SnackBarService } from '../shared/snackbar/snackbar.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  @ViewChild('f') signupForm: NgForm;
  checked = false;
  private subscription: Subscription
  constructor(private router: Router,
              private employeeService: HttpEmployeeService,
              private snack: SnackBarService) {}

  ngOnInit() {
     this.loadDataFromEdit();
   }
   
  onSubmit() {
    if (this.signupForm.valid) {
      let formData = this.signupForm.value;
      if (formData._id) {
        this.employeeService.editEmployee(formData)
          .subscribe((res) => {
            this.router.navigate(['main']);
          }, (err) => {
            this.snack.openSnackBarStandard('error on edit');
          });
      } else {
        delete formData._id
        this.employeeService.saveEmployee<Employee>(formData)
          .subscribe((res) => {
            this.router.navigate(['main']);
          }, (err) => {
            this.snack.openSnackBarStandard('error on on save');
          });
      }
    }
  }
  onBack() {
    this.router.navigate(['main']);
  }

  private loadDataFromEdit() {
    this.signupForm.form.reset();
    this.subscription = this.employeeService.editEmployeeSubject.subscribe((data) => {
        if(!data) return
        this.employeeService.getSpecificEmployee<Employee>(data).subscribe((result) => {
        this.signupForm.form.patchValue(result);
      });
    });
    this.subscription.unsubscribe();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.signupForm.form.reset();
  }

}
