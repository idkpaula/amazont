import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', price: 100, availability: true, images: ['https://picsum.photos/200', 'https://picsum.photos/201'], reviews: [{ user: 'Juan', rating: 4, comment: 'Muy bueno' }] },
    { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', price: 200, availability: false, images: ['https://picsum.photos/202', 'https://picsum.photos/203'], reviews: [{ user: 'Ana', rating: 5, comment: 'Excelente calidad' }] }
  ];

  getProductById(id: number): Observable<any> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  private productos = new BehaviorSubject<Product[]>([
    {
      id: 1,
      title: 'Producto de ejemplo',
      description: 'Descripción de ejemplo',
      price: 100,
      image: 'https://via.placeholder.com/150',
      sales: 10,
    },
  ]);

  getProducts(): Observable<Product[]> {
    return this.productos.asObservable();
  }

  addProduct(product: Product) {
    const updated = [...this.productos.getValue(), product];
    this.productos.next(updated);
  }

  updateProduct(product: Product) {
    const updated = this.productos.getValue().map((p) =>
      p.id === product.id ? product : p
    );
    this.productos.next(updated);
  }
}
