import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";
import { LoginFormComponent } from "./login/login-form/login-form.component";
import { EmployeeFormComponent } from "./employee/employee-form/employee-form.component";


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'main', component:  EmployeeComponent },
     { path: 'signup', component: LoginFormComponent },
     { path: 'employee', component:  EmployeeFormComponent },
    
    { path: '**', redirectTo: '' } ]


@NgModule({
    imports: [
      // RouterModule.forRoot(appRoutes, {useHash: true})
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule {

}
