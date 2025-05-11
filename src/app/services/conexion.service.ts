import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private apiUrl = 'http://localhost:8000/api'; // URL base de tu API Laravel

  constructor(private http: HttpClient) {}

  // Obtenemos los datos de la ruta prueba de la api para comprovar que la conexión con Laravel es exitosa
  getDatos(): Observable<any> {
    return this.http.get('http://localhost:8000/api/prueba');
  }

}
