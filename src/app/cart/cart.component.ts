import { Component } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  subtotal: number = 0;
  shipping: number = 0;
  total: number = 0;
  loading: boolean = true;

  constructor(
    private cartService: CartService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.cartService.items$.subscribe(items => {
      this.cartItems = items;
      this.updateSummary();
      this.loading = false;
    });
  }

  updateQty(item: CartItem): void {
    if (item.quantity < 1) {
      this.notificationService.show('La cantidad debe ser al menos 1', 'error');
      item.quantity = 1; // Restablecer valor
      return;
    }

    this.cartService.updateQuantity(item.id, item.quantity);
    this.notificationService.show(`Cantidad actualizada a ${item.quantity}`);
    this.updateSummary();
  }

  removeItem(id: number): void {
    const item = this.cartItems.find(i => i.id === id);
    this.cartService.removeItem(id);
    this.notificationService.show(`${item?.name} eliminado del carrito`);
    this.updateSummary();
  }

  updateSummary(): void {
    this.subtotal = this.cartService.subtotal;
    this.shipping = this.cartService.shipping;
    this.total = this.cartService.total;
  }
}