import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationHardcodedService } from './authentication-hardcoded.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    private authenticationHardcoded: AuthenticationHardcodedService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationHardcoded.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
