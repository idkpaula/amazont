import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, title: 'Producto 1', description: 'Descripción del producto 1', price: 100, availability: true, images: ['img1.jpg', 'img2.jpg'], reviews: [{ user: 'Juan', rating: 4, comment: 'Muy bueno' }] },
    { id: 2, title: 'Producto 2', description: 'Descripción del producto 2', price: 200, availability: false, images: ['img3.jpg', 'img4.jpg'], reviews: [{ user: 'Ana', rating: 5, comment: 'Excelente calidad' }] }
  ];

  getProductById(id: number): Observable<any> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}
