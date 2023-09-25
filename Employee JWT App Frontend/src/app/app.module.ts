import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Logger } from './auth/logger';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EmployeeService } from './employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeLoginComponent,
    EmployeeUpdateComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [BrowserModule, FormsModule,
    HttpClientModule, AppRoutingModule,

  ],
  providers: [EmployeeService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Logger,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
