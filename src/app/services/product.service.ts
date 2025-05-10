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
      title: 'Producto de ejemplo',
      description: 'Descripción de ejemplo',
      price: 100,
      image: 'https://via.placeholder.com/150',
      stock: 20,
      sales: 10
    },
    {
      id: 2,
      title: 'Otro producto',
      description: 'Otro producto de prueba',
      price: 200,
      image: 'https://via.placeholder.com/200',
      stock: 15,
      sales: 5
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
 