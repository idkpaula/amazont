import { Component, Input } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria-item.component.html',
  styleUrl: './categoria-item.component.css'
})
export class CategoriaItemComponent {
  @Input() categoria!: Categoria;
}
