import { Component } from '@angular/core';
import { categoria } from '../../interfaces/categoria';
@Component({
  selector: 'app-categorias-destacadas',
  standalone: true,
  imports: [],
  templateUrl: './categorias-destacadas.component.html',
  styleUrl: './categorias-destacadas.component.css',
})
export class CategoriasDestacadasComponent {
  categoriasDestacadas: categoria[] = [
    {
      id: 1,
      nomcategoria: 'Electronica',
      img: '',
      descripcion: 'Descripcion de la categoria',
    },
    {
      id: 2,
      nomcategoria: 'Belleza y Salud',
      img: '',
      descripcion: 'Descripcion de la categoria',
    },
    {
      id: 3,
      nomcategoria: 'Hogar',
      img: '',
      descripcion: 'Descripcion de la categoria',
    },
    {
      id: 4,
      nomcategoria: 'Mascotas',
      img: '',
      descripcion: 'Descripcion de la categoria',
    },
    {
      id: 6,
      nomcategoria: 'Moda',
      img: '',
      descripcion: 'Descripcion de la categoria',
    },
  ];
}
