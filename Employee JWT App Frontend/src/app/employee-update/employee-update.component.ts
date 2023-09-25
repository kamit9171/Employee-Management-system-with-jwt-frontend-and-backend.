import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {
  id: number = 0;
  employee: Employee = new Employee();
  dateOfJoiningError = false;
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService, private authService: AuthService){}

  ngOnInit(): void {
    if(!this.authService.isLoggedIn()){
      console.log('Error: Login to Authorize');
      this.router.navigate(['/error']);
    }
    else{
      this.employee = new Employee();
      this.id = this.route.snapshot.params['id'];
  
      this.employeeService.getEmployee(this.id).subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
    }
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.gotoList();
    }, error => console.log(error));
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

  gotoList(){
    this.router.navigate(['/']);
  }

  goBack(){
    this.router.navigate(['/']);
  }

}

