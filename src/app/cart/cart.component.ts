import { Component } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: CartItem[] = [];
  subtotal = 0;
  shipping = 0;
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      this.cartItems = items;
      this.updateSummary();
    });
  }

  updateQty(item: CartItem): void {
    this.cartService.updateQuantity(item.id, item.quantity);
    this.updateSummary();
  }

  removeItem(id: number): void {
    this.cartService.removeItem(id);
    this.updateSummary();
  }

  updateSummary(): void {
    this.subtotal = this.cartService.subtotal;
    this.shipping = this.cartService.shipping;
    this.total = this.cartService.total;
  }
}