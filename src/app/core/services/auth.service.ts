import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

interface User {
    id: string;
    email: string;
    name: string;
    role: string;
    token?: string;
    tokenExpiry?: number;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User | null>;

    constructor(private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User | null>(
            this.getUserFromStorage()
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    private getUserFromStorage(): User | null {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    }

    public get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    login(email: string) {
        const user: User = {
            id: '1',
            email: email,
            name: email === 'yared@gmail.com' ? 'Admin User' : 'Patient User',
            role: email === 'yared@gmail.com' ? 'admin' : 'patient',
            token: 'mock-jwt-token',
            tokenExpiry: Date.now() + 3600000, // Token expires in 1 hour
        };

        // Store user details and token in local storage
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);

        // Navigate based on role
        this.router.navigate([email === 'yared@gmail.com' ? '/admin' : '/patient']);
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigate(['/']);
    }

    isAuthenticated(): boolean {
        return !!this.currentUserValue && !this.isTokenExpired();
    }

    isAdmin(): boolean {
        return this.currentUserValue?.role === 'admin';
    }

    isTokenExpired(): boolean {
        const user = this.currentUserValue;
        return !user || !user.tokenExpiry || Date.now() > user.tokenExpiry;
    }

    refreshToken(): Promise<boolean> {
        return new Promise((resolve) => {
            const user = this.currentUserValue;
            if (user) {
                user.tokenExpiry = Date.now() + 3600000; // Extend token for 1 hour
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                resolve(true);
            } else {
                resolve(false);
            }
        });
    }

    hasRole(requiredRoles: string[]): boolean {
        const userRole = this.currentUserValue?.role;
        return userRole ? requiredRoles.includes(userRole) : false;
    }
}
