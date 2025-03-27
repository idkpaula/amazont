import { Component, ViewChild, type ElementRef, type AfterViewInit } from '@angular/core';
import { productoRecomendado } from '../../interfaces/productoRecomendado';

@Component({
  selector: 'app-producto-recomendado',
  standalone: true,
  imports: [],
  templateUrl: './producto-recomendado.component.html',
  styleUrl: './producto-recomendado.component.css',
})
export class ProductoRecomendadoComponent {
  @ViewChild('productList') productList?: ElementRef;
  productosRecomendados: productoRecomendado[] = [
    {
      id: 1,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },
    {
      id: 2,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },
    {
      id: 3,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },
    {
      id: 4,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },
    {
      id: 5,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },
    {
      id: 6,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },
    {
      id: 7,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },

    {
      id: 8,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },

    {
      id: 9,
      nomProducto: 'Nombre del Producto',
      precio: '27,64€',
      descripcion: 'test',
      img: '',
    },
  ];

  ngAfterViewInit() {
    // The view is initialized, and productList is available
  }

  scroll(direction: 'prev' | 'next') {
    if (this.productList) {
      const container = this.productList.nativeElement;
      const scrollAmount = container.offsetWidth;
      if (direction === 'prev') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  }
}
