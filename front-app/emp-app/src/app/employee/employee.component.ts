import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { HttpEmployeeService } from '../service/http.service/employee.http.service';
import { Employee } from '../shared/models/employee.model';
import { LocalStorageService } from '../service/localStorage';
import { User } from '../shared/models/user.model';
import { Subscription, Subject } from 'rxjs';
import { SnackBarService } from '../shared/snackbar/snackbar.service';

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
              private httpEmployeeService: HttpEmployeeService,
              private local: LocalStorageService,
              private snack:SnackBarService
              ) { }

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
    this.httpEmployeeService.editEmployeeEmit('');
  }

  private getEmployees() {
    this.httpEmployeeService.getEmployees().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    },
      err => {
        this.snack.openSnackBarStandard('error on retrive');
      });
  }
  onEdit(row){
    this.router.navigate(['employee']);
    this.httpEmployeeService.editEmployeeEmit(row._id);
  }

  onDelete(row){
    this.httpEmployeeService.deleteEmployee(row._id).subscribe(res=>{
      this.getEmployees();
      this.snack.openSnackBarStandard(`Delete done: ${row.firstName} is gone :(`);
    },err=>{
      this.snack.openSnackBarStandard('error on Delete');
    })
  }
  
  ngOnDestroy(): void {
    this.supscriptions.unsubscribe();

  }

}

