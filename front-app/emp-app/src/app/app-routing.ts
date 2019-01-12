import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from "./employee/employee.component";


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'main', component:  EmployeeComponent },
    // { path: 'home', component: HomeUtilitieComponent },
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
