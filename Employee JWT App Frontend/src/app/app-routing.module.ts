import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {path: '', component: EmployeeListComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'update-employee/:id', component: EmployeeUpdateComponent},
  {path: 'details/:id', component: EmployeeDetailsComponent},
  {path: 'login', component: EmployeeLoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
