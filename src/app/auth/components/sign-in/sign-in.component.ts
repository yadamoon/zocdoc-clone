import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  isOpen = false;
  loginForm: FormGroup;
  isLoading = false;
  isSubmitting = false;
  returnUrl: string = '/';
  error: string = '';

  togglePasswordVisibility() {
    throw new Error('Method not implemented.');
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) {

    // Redirect if already logged in
    if (this.authService.isAuthenticated()) {
      // this.router.navigate(['/admin']);
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    // Get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';


  }

  async onSubmit() {
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      this.error = '';

      try {
        const { email } = this.loginForm.value;
        await this.authService.login(email);
        // this.router.navigate([this.returnUrl]);
      } catch (error) {
        this.error = 'Invalid email ';
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.markFormGroupTouched(this.loginForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Getter methods for form controls
  get email() { return this.loginForm.get('email'); }


  openModal() {
    this.isOpen = true;
    this.toggleBodyScroll();
  }

  closeModal() {
    this.isOpen = false;
  }
  toggleBodyScroll() {
    if (this.isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }
}
