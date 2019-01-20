import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.http.service';
import { Employee } from '../models/employee.model';
import { LocalStorageService } from '../service/localStorage';
import { User } from '../models/user.model';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  private employees: Employee[];
  private supscriptions: Subscription;
  name: String
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'company', 'phone', 'edit'];
  dataSource = new MatTableDataSource(this.employees);
  editEmployee =new Subject()
  constructor(private router: Router,
    private employeeService: EmployeeService,
    private local: LocalStorageService) { }

  ngOnInit() {
    this.getEmployees();
    this.name = this.local.getEmail()
    if (!name) {
      this.supscriptions = this.local.tokenEmit.subscribe((res: User) => {
        this.name = res.email;
      })
    }
  }
  onNewUser() {
    this.router.navigate(['employee']);
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    },
      err => {

      });
  }
  onEdit(id){
    this.router.navigate(['employee']);
    this.employeeService.editEmployeeEmit(id);
  }
  onDelete(id){
    this.employeeService.deleteEmployee(id).subscribe(res=>{
      this.getEmployees();
      //popup
    },err=>{
    })
  }
  ngOnDestroy(): void {
    this.supscriptions.unsubscribe();

  }
}

