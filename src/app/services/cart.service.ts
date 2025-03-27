import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../../interfaces/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
//   private itemsSubject = new BehaviorSubject<CartItem[]>([]); // De esta manera el carrito esta vacío
//de esta manera hay productos ejemplos
  private itemsSubject = new BehaviorSubject<CartItem[]>([
    {
      id: 1,
      name: 'Auriculares Bluetooth',
      price: 49.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100x100.png?text=Auriculares'
    },
    {
      id: 2,
      name: 'Smartwatch Fitness',
      price: 79.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100x100.png?text=Smartwatch'
    },
    {
      id: 3,
      name: 'Cámara Instantánea',
      price: 99.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100x100.png?text=Cámara'
    }
  ]);
  
  items$ = this.itemsSubject.asObservable();

  get items(): CartItem[] {
    return this.itemsSubject.getValue();
  }

  addItem(item: CartItem): void {
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push(item);
    }
    this.itemsSubject.next(this.items);
  }

  updateQuantity(id: number, quantity: number): void {
    const item = this.items.find(i => i.id === id);
    if (item) {
      item.quantity = quantity;
      this.itemsSubject.next(this.items);
    }
  }

  removeItem(id: number): void {
    const updated = this.items.filter(i => i.id !== id);
    this.itemsSubject.next(updated);
  }

  clearCart(): void {
    this.itemsSubject.next([]);
  }

  get subtotal(): number {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  get shipping(): number {
    return this.subtotal > 0 ? 5 : 0; // Ejemplo: envío fijo de 5
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }
}
