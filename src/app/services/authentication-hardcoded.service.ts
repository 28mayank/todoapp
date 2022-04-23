import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHardcodedService {

  constructor() { }

  authenticate(username:string, password: string): boolean {
    if (username !== 'mack' && password !== 'mack') {
      return true;
    }
    sessionStorage.setItem('authenticateUser', username);
    return false;
  }

  isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticateUser');
    return user !== null;
  }

  logOut(): void {
    sessionStorage.removeItem('authenticateUser');
  }
  
}
