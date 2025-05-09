import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  profileForm!: FormGroup;
  showEditForm = false;

  orderHistory = [
    { id: 1, date: '2024-11-23', total: 59.99 },
    { id: 2, date: '2025-01-10', total: 89.5 }
  ];

  paymentMethods = ['Visa ****1234', 'PayPal - joan@example.com'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['Joan', [Validators.required, Validators.minLength(2)]],
      email: ['joan@example.com', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: [''],
      paymentMethod: ['Visa ****1234']
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit() { 
    if (this.profileForm.valid) {
      console.log('Perfil actualitzat:', this.profileForm.value);
      this.showEditForm = false;
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  get f() { return this.profileForm.controls; }
}