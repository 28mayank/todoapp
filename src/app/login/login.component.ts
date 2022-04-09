import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  onLogin(): void {
    if (this.userName !== 'mack' && this.password !== 'mack') {
      this.isInvalid = true;
    }else {
      this.isInvalid = false;
    }
    // console.log(this.userName);
  }
}
