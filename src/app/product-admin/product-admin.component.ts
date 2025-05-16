import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (productos) => {
        this.products = productos;
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
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
    const newProduct: Product = {
      ...this.form,
      id: this.generateNewId(),
      sales: 0,
    } as Product;

    this.productService.addProduct(newProduct);
    this.resetForm();
  }

  updateProduct() {
    if (!this.form.id) {
      console.error('No se puede actualizar un producto sin ID');
      return;
    }

    const updatedProduct = this.form as Product;
    this.productService.updateProduct(updatedProduct);
    this.resetForm();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
  }

  edit(product: Product) {
    this.form = { ...product };
    this.editing = true;
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

  private generateNewId(): number {
    const ids = this.products.map(p => p.id || 0);
    return ids.length ? Math.max(...ids) + 1 : 1;
  }
}
