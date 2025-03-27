import { Component, Input } from '@angular/core';
import { Producto } from '../models/producto.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css'
})
export class ProductoItemComponent {
  @Input() producto!: Producto;
}
