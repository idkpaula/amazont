import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

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

  loginUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/Login`, data).pipe(
      tap((response: any) => {
        // Guardar el token en localStorage
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  logoutUsuario(): void {
    localStorage.removeItem('token');  // Elimina el token almacenado
    console.log('Sesión cerrada: token eliminado.');
  }

  // Ejemplo de cómo hacer una solicitud protegida
  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/user`, { headers });
  }

  getOrderHistory(userId: number): Observable<any[]> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    });

    return this.http.get<any[]>(`${this.apiUrl}/shop/Buy/${userId}`, { headers });
  }

  updateUser(id: number, data: any): Observable<any> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`${this.apiUrl}/user/Modify/${id}`, data, { headers });
  }

  deleteUser(id: number): Observable<any> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.apiUrl}/user/Delete/${id}`, { headers });
  }

  // Crear un nuevo producto
  crearProducto(data: any): Observable<any> {
    const token = this.getAuthToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }) 
    });

    return this.http.post(`${this.apiUrl}/product/Create`, data, { headers });
  }

  // Listado de productos
  obtenerMisProductos(userId: number): Observable<any[]> {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    });

    return this.http.get<any[]>(`${this.apiUrl}/product/My/${userId}`, { headers });
  }

  actualizarProducto(id: string, producto: any): Observable<any> {
    const url = `${this.apiUrl}/product/Modify/${id}`;
    return this.http.put<any>(url, producto);
  }

  eliminarProducto(id: string): Observable<any> {
    const url = `${this.apiUrl}/product/Delete/${id}`;
    return this.http.delete<any>(url);
  }
}
