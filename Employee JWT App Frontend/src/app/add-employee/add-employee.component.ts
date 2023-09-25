import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  dateOfJoiningError = false;

  constructor(private router: Router, private employeeService: EmployeeService, private authService: AuthService){}

  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      console.log('Error: Login to Authorize');
      this.router.navigate(['/error']);
    }
  }

  onSubmit(){
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    })
  }

  goBack(){
    this.router.navigate(['/']);
  }

  isDateInFuture(dateString: string): boolean{
    const today = new Date();
    const date = new Date(dateString);
    console.log(date>today);
    return date > today;
  }
  validateDateOfJoining(){
    this.dateOfJoiningError = this.isDateInFuture(this.employee.dateOfJoining);
  }

}



