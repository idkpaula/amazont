import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private apiUrl = 'http://localhost:8000/api'; // URL base de mi API de Laravel

  constructor(private http: HttpClient) {}

  // Método para obtener el token desde localStorage
  private getAuthToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para obtener los datos de la ruta prueba de la api para comprobar que la conexión con Laravel es exitosa
  getDatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/prueba`);
  }

  // Método para enviar los datos del registro a la base de datos
  registerUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/Create`, data);
  }

  // Método para login
  loginUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/Login`, data);
  }

  logoutUsuario(): void {
    localStorage.removeItem('token');  // Elimina el token almacenado
    console.log('Sesión cerrada: token eliminado.');
  }

  // Ejemplo de cómo hacer una solicitud protegida
  getUserProfile(): Observable<any> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/user`, { headers });
  }
}
