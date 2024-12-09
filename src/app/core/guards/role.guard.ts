// import { inject } from '@angular/core';
// import { Router, ActivatedRouteSnapshot } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// export const roleGuard = (route: ActivatedRouteSnapshot) => {
//     const router = inject(Router);
//     const authService = inject(AuthService);

//     // Get allowed roles from route data
//     const allowedRoles = route.data['roles'] as Array<string>;

//     // Get user's role
//     const userRole = authService.getUserRole();

//     if (allowedRoles.includes(userRole)) {
//         return true;
//     }

//     // If role not authorized, redirect to dashboard
//     router.navigate(['/admin']);
//     return false;
// }; 