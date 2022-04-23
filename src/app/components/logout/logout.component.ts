import { Component, OnInit } from '@angular/core';
import { AuthenticationHardcodedService } from 'src/app/services/authentication-hardcoded.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loggingOut: AuthenticationHardcodedService) { }

  ngOnInit(): void {
    this.loggingOut.logOut();
  }

}
