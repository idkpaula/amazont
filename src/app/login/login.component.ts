import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  showPassword = false;

  constructor(private fb: FormBuilder, private router: Router, private conexionService: ConexionService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    this.conexionService.loginUsuario(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);

        // Redirige al usuario según el valor recibido
        const redirectUrl = response.redirect_to;
        this.router.navigateByUrl(redirectUrl);
      },
      error: (error) => {
        console.error('Error de login:', error);
        if (error.status === 401) {
          alert('Credenciales incorrectas');
        } else {
          alert('Error en el servidor');
        }
      }
    });
  }
}
