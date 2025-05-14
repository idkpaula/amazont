import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConexionService } from '../services/conexion.service'; 

@Component({
  selector: 'app-product-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})

export class ProductAdminComponent {
  products: Product[] = [];
  form: Partial<Product> = {};
  editing: boolean = false;
  @ViewChild('formElement') formElement!: ElementRef;

  constructor(
    private productService: ProductService,
    private conexionService: ConexionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  saveProduct() {
    if (this.editing) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
  }

  createProduct() {
    console.log('Formulario enviado:', this.form);

    this.conexionService.crearProducto(this.form).subscribe({
      next: (res) => {
        console.log('Producto creado con éxito:', res);
        this.products.push(res); 
        this.resetForm();
      },
      error: (err) => {
        console.error('Error al crear el producto:', err);
        console.error('Detalles del backend:', err.error?.errors);
      }
    });
  }

  updateProduct() {
    if (!this.form.id) {
      console.error('No se puede actualizar un producto sin ID');
      return;
    }

    this.conexionService.actualizarProducto(this.form.id.toString(), this.form).subscribe({
      next: (res) => {
        console.log('Producto actualizado con éxito:', res);
        const index = this.products.findIndex(p => p.id === this.form.id);
        if (index !== -1) {
          this.products[index] = res;
        }
        this.resetForm();
      },
      error: (err) => {
        console.error('Error al actualizar el producto:', err);
        console.error('Detalles del backend:', err.error?.errors);
      }
    });
  }

  edit(product: Product) {
    this.form = { ...product };
    this.editing = true;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

  resetForm() {
    this.form = {};
    this.editing = false;
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  get totalVentas() {
    return this.products.reduce((sum, p) => sum + (p.sales ?? 0), 0);
  }

  get totalIngresos() {
    return this.products.reduce((sum, p) => sum + ((p.precio ?? 0) * (p.sales ?? 0)), 0);
  }

  get totalStock() {
    return this.products.reduce((acc, p) => acc + (p.cantidad ?? 0), 0);
  }

  get averagePrice() {
    return this.products.length ? this.totalIngresos / this.products.length : 0;
  }

  get averageSales() {
    return this.products.length ? this.totalVentas / this.products.length : 0;
  }

  get topProduct(): Product | null {
    return this.products.reduce((top: Product | null, p: Product) =>
    !top || (p.sales ?? 0) > (top.sales ?? 0) ? p : top, null);
  }

  trackByProductId(index: number, product: Product) {
    return product.id;
  }
}
