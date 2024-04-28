import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { USER_LOGIN } from '../models/data.storage';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  private auth = inject(AuthService);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validateName();
  }

  validateName() {
    const nameStorage: UserModel = this.auth.get(USER_LOGIN);
    if (nameStorage && nameStorage.name) {
      return true;
    } else {
      return false;
    }
  }

}
