import { Injectable } from '@angular/core';

import { AdloginService } from './adlogin.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private adloginservice:AdloginService,private router:Router) { }
  canActivate() {
      if(this.adloginservice.isAdminLogin()){
      return true;
    }else{
      this.router.navigate([`adlogin`]);
      return false;
    }
  }
}
