import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

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


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Implement login logic here
      console.log('Login form submitted:', this.loginForm.value);
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    } else {
      this.loginForm.markAllAsTouched();
    }
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
