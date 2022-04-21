import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHardcodedService {

  constructor() { }

  authenticate(username:string, password: string): boolean {
    return username !== 'mack' && password !== 'mack';
  }
}
