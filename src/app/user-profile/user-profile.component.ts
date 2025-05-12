import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

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

  orderHistory: any[] = [];
  paymentMethods: string[] = [];

  userId!: number; // 🆕 Se declara el userId

  constructor(
    private fb: FormBuilder,
    private conexionService: ConexionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.minLength(6)]],
      confirmPassword: [''],
      paymentMethod: ['']
    }, { validators: this.passwordsMatchValidator });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    }, { validators: this.newPasswordsMatchValidator });

    this.conexionService.getUserProfile().subscribe({
      next: (response) => {
        const user = response.user;
        this.userId = user.id; // 🆕 Se guarda el ID del usuario

        this.profileForm.patchValue({
          name: user.name,
          email: user.email,
          paymentMethod: user.numero_tarjeta
            ? `**** **** **** ${user.numero_tarjeta.slice(-4)}`
            : ''
        });

        this.orderHistory = user.orders ?? [];
        this.paymentMethods = user.numero_tarjeta
          ? [`**** **** **** ${user.numero_tarjeta.slice(-4)}`]
          : [];
      },
      error: (error) => {
        console.error('Error al obtener datos del usuario', error);
        this.router.navigate(['/login']);
      }
    });
  }

  passwordsMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  newPasswordsMatchValidator(form: FormGroup) {
    const newPassword = form.get('newPassword')?.value;
    const confirm = form.get('confirmNewPassword')?.value;
    return newPassword === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;

      const updatedData = {
        name: formData.name,
        email: formData.email,
        password: formData.password ? formData.password : undefined,
        numero_tarjeta: formData.paymentMethod.replace(/\D/g, '') // Elimina caracteres no numéricos
      };

      this.conexionService.updateUser(this.userId, updatedData).subscribe({
        next: (response) => {
          console.log('Usuario actualizado', response);
          this.showEditForm = false;
        },
        error: (err) => {
          console.error('Error al actualizar el usuario', err);
        }
      });
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  confirmDelete(): void {
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');

    if (confirmed) {
      this.conexionService.deleteUser(this.userId).subscribe({
        next: () => {
          alert('Cuenta eliminada correctamente.');
          this.conexionService.logoutUsuario();  // Borra el token
          this.router.navigate(['/login']);     // Redirige a login
        },
        error: (err) => {
          console.error('Error al eliminar la cuenta', err);
          alert('Hubo un error al eliminar la cuenta.');
        }
      });
    } 
  }

  onLogout() {
    this.conexionService.logoutUsuario();
    this.router.navigate(['/login']);
  }

  get f() {
    return this.profileForm.controls;
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
