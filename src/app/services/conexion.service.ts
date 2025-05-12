import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private apiUrl = 'http://localhost:8000/api'; // URL base de mi API de Laravel

  constructor(private http: HttpClient) {}

  // Obtenemos los datos de la ruta prueba de la api para comprovar que la conexión con Laravel es exitosa
  getDatos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/prueba`);
  }

  // Método para enviar los datos del registro a la base de datos
  registerUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  loginUsuario(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

}
