import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcordedAuthentificationService } from './hardcorded-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ReouteGuardService implements CanActivate {

  constructor(private hardcode: HardcordedAuthentificationService,
    private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcode.isUserLoggedIn())
      return true;
    this.router.navigate(['login']);
    return false;
  }
}
