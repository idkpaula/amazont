import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private conexion: ConexionService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      accountType: ['Cliente', Validators.required],
      acceptedTerms: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  get f() {
    return this.registerForm.controls;
  } 

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;

    const user = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
      rol: this.f['accountType'].value // usa 'Cliente' o 'Vendedor'
    };

   this.conexion.registerUsuario(user).subscribe({
      next: (res) => {
        console.log('Registro exitoso:', res);
        this.router.navigate(['/login']); 
      },
      error: (err) => {
        console.error('Error en el registro:', err);
        if (err.error?.errors) {
          // Muestra los mensajes de error del backend, si los hay
          alert(`Error: ${err.error.errors.join(', ')}`);
        } else {
          alert('Hubo un error inesperado');
        }
      }
    });
  }
}
