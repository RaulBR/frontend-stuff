import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  private employees: Employee[];
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'company','phone','edit','delete'];
  dataSource = new MatTableDataSource(this.employees);
  constructor(private router:Router,
              private employeeService: EmployeeService) { }
  
  
  ngOnInit() {
    this.getEmployees();
    
    
  }
  onNewUser(){
    this.router.navigate(['employee']);
  }

  private getEmployees(){
    this.employeeService.getEmployees().subscribe(res=>{
     this.dataSource = new MatTableDataSource(res);
     this.dataSource.sort = this.sort;
    },
    err =>{

    });
  }
}

