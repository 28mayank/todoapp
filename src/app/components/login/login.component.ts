import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationHardcodedService } from 'src/app/services/authentication-hardcoded.service';

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

  constructor(private router: Router,
    private hardcodedAuthentication: AuthenticationHardcodedService) { }

  ngOnInit(): void { }

  onLogin(): void {
    if (this.hardcodedAuthentication.authenticate(this.userName, this.password)) {
      this.isInvalid = true;
    } else {
      this.isInvalid = false;
      this.router.navigate(['welcome', this.userName]);
    }
  }
}
