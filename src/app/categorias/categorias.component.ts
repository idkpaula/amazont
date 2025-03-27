import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoriaItemComponent } from '../categoria-item/categoria-item.component';
import { ProductoItemComponent } from '../producto-item/producto-item.component';
import { Categoria } from '../models/categoria.model';
import { Producto } from '../models/producto.model';
import { CATEGORIAS, PRODUCTOS } from '../data/mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CategoriaItemComponent, ProductoItemComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent {
  categorias: Categoria[] = CATEGORIAS;
  productos: Producto[] = PRODUCTOS;
  categoriaSeleccionada: number | null = null;

  seleccionarCategoria(id: number) {
    this.categoriaSeleccionada = id;
  }
}
