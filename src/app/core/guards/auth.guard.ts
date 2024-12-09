import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    // Check if user is authenticated
    if (this.authService.isAuthenticated()) {
      // Check for required roles
      const requiredRoles = route.data['roles'];
      const userRole = this.authService.currentUserValue?.role;

      if (requiredRoles && (!userRole || !requiredRoles.includes(userRole))) {
        // Role not authorized, redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // Check for admin requirement
      if (route.data['requiresAdmin'] && !this.authService.isAdmin()) {
        // Not admin, redirect to home page
        this.router.navigate(['/']);
        return false;
      }

      // Check if token is expired
      if (this.authService.isTokenExpired()) {
        // Token expired, handle auth error
        this.handleAuthError(state.url);
        return false;
      }

      // Authorization successful
      return true;
    }

    // Not logged in, redirect to login page with return url
    this.handleAuthError(state.url);
    return false;
  }

  private handleAuthError(returnUrl: string): void {
    // Clear any expired tokens
    this.authService.logout();

    // Redirect to login with return URL
    this.router.navigate(['/portal']);
  }
}
