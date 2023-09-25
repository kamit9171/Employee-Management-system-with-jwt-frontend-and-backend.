import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { AuthService } from '../auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployees: Employee[] = [];
  selectedCount: number = this.selectedEmployees.length;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private authService: AuthService
    ){}

    ngOnInit() {
      this.getEmployees();
    }
    getEmployees(): void {
      this.employeeService.getEmployees().subscribe(employees=> this.employees = employees);
      this.employeeService.getEmployees().subscribe(employees => console.log(employees));
    }

    deleteEmployees(): void {
      if(!this.authService.isLoggedIn()){
        console.log('Error: Login to Authorize');
        this.router.navigate(['/error']);
      }
      else{
        console.log(this.selectedEmployees);
        const ids = this.selectedEmployees.map(employee => employee.id);
        this.employeeService.deleteEmployee(ids).subscribe(() => {
          this.employees = this.employees.filter(employee => !ids.includes(employee.id));
          this.selectedEmployees = [];
      })
      this.router.navigate(['/']);
    }
  }
  selectAll(event: Event): void {
    const target = event.target as HTMLInputElement; 
    if(target.checked){
      this.selectedEmployees = [...this.employees];
    }
    else{
      this.selectedEmployees = [];
    }
  }
  onSelect(employee: Employee, event: Event): void {
    const target = event.target as HTMLInputElement; 

    if(target.checked){
      this.selectedEmployees = this.selectedEmployees.concat(this.employees.filter(emp => emp.id == employee.id));
    }
    else{
      this.selectedEmployees = this.selectedEmployees.filter(emp => emp.id != employee.id);
    }
  }

  isChecked(employee: any): boolean{
    return this.selectedEmployees.includes(employee);
  }

  goToCreate() : void {
    this.router.navigate(['/add-employee']);
  }

  goToUpdate(employee: Employee): void {
    this.router.navigate(['/update-employee/', employee.id]);
  }

}
