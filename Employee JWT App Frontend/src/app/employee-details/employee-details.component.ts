

import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employee: Employee = new Employee();
  id: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
  ){}

  ngOnInit(): void {
    this.employee = new Employee();
    this.id = this.route.snapshot.params['id'];
    this.getEmployee();
  }

  getEmployee(): void {
    this.employeeService.getEmployee(this.id).subscribe((data) => this.employee = data);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}



