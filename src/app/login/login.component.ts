import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userName: string = '';
  public password: string = '';
  public errorMessage: string = 'Invalid credentials';
  public isInvalid: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onLogin(): void {
    if (this.userName !== 'mack' && this.password !== 'mack') {
      this.isInvalid = true;
    } else {
      this.isInvalid = false;
      this.router.navigate(['welcome']);
    }
  }
}
