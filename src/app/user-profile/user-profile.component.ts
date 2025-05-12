import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ConexionService } from '../services/conexion.service'; // Asegúrate de tener este servicio

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  profileForm!: FormGroup;
  passwordForm!: FormGroup;

  showEditForm = false;
  showPasswordForm = false;
  submittedPassword = false;

  orderHistory = [
    { id: 1, date: '2024-11-23', total: 59.99 },
    { id: 2, date: '2025-01-10', total: 89.5 }
  ];

  paymentMethods = ['Visa ****1234', 'PayPal - joan@example.com'];

  constructor(
    private fb: FormBuilder,
    private conexionService: ConexionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['Joan', [Validators.required, Validators.minLength(2)]],
      email: ['joan@example.com', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: [''],
      paymentMethod: ['Visa ****1234']
    }, { validators: this.passwordsMatchValidator });

    // Formulario de cambio de contraseña
    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    }, { validators: this.newPasswordsMatchValidator });
  }

  // Validador para el formulario principal
  passwordsMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  // Validador para el formulario de cambio de contraseña
  newPasswordsMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirm = form.get('confirmNewPassword')?.value;
    return newPassword === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Perfil actualizado:', this.profileForm.value);
      this.showEditForm = false;
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  // Método que se ejecuta cuando el usuario hace clic en "Cerrar sesión"
  onLogout() {
    this.conexionService.logoutUsuario();
    this.router.navigate(['/login']);
  }

  get f() {
    return this.profileForm.controls;
  }
}
