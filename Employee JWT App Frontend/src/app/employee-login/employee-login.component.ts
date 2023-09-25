
  

import { Component } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  username: string = "";
  password: string = "";

  constructor(private _authService: AuthService, private _router: Router) { }

  onSubmit() {
    let user: User = {
      username: this.username,
      password: this.password,
    };
    this._authService.login(user).subscribe({
      next: (data: any) => { 
        this._authService.setLoggedIn();
        sessionStorage.setItem('token', data.token);
        this._router.navigate(['']);
      },
      error: (err: any) => console.log(err)
    });
  }

  goBack(){
    this._router.navigate(['/']);
  }

}


