import { Component, Input } from '@angular/core';
import { Producto } from '../models/producto.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-producto-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css'
})
export class ProductoItemComponent {
  @Input() producto!: Producto;

  constructor(private carritoService: CartService) {}  // Inyectamos el servicio

  // Método para manejar el click en el botón de añadir al carrito
  addToCart(): void {
    this.carritoService.addToCart(this.producto);  
  }
}
