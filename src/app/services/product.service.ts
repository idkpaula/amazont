import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
}
