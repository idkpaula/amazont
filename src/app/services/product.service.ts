import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos = new BehaviorSubject<Product[]>([
    {
      id: 1,
      nombre: 'Producto de ejemplo',
      descripcion: 'Descripción de ejemplo',
      precio: 100,
      imagen: 'https://via.placeholder.com/150',
      cantidad: 20,
      sales: 10,
      cat_id: 1,
      oferta: false
    },
    {
      id: 2,
      nombre: 'Otro producto',
      descripcion: 'Otro producto de prueba',
      precio: 200,
      imagen: 'https://via.placeholder.com/200',
      cantidad: 15,
      sales: 5, 
      cat_id: 2,
      oferta: true
    }
  ]);


  getProducts(): Observable<Product[]> {
    return this.productos.asObservable();
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.productos.getValue().find(p => p.id === id);
    return of(product);
  }

  addProduct(product: Product): void {
    const updated = [...this.productos.getValue(), product];
    this.productos.next(updated);
  }

  updateProduct(product: Product): void {
    const updated = this.productos.getValue().map((p) =>
      p.id === product.id ? product : p
    );
    this.productos.next(updated);
  }

  deleteProduct(id: number): void {
    const updated = this.productos.getValue().filter(p => p.id !== id);
    this.productos.next(updated);
  }
}
