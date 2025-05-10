import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data) => (this.products = data));
  }

  saveProduct() {
    if (this.editing && this.form.id !== undefined) {
      this.productService.updateProduct(this.form as Product);
    } else {
      const newProduct: Product = {
        id: Date.now(),
        title: this.form.title ?? '',
        description: this.form.description ?? '',
        price: this.form.price ?? 0,
        image: this.form.image ?? '',
        stock: this.form.stock ?? 0,
        sales: 0
      };
      this.productService.addProduct(newProduct);
    }
    this.resetForm();
  }

  edit(product: Product) {
    this.form = { ...product };
    this.editing = true;

    // Scroll suave hacia el formulario
    setTimeout(() => {
      this.formElement?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }


  resetForm() {
    this.form = {};
    this.editing = false;
  }

  // Estadísticas generales
  get totalVentas(): number {
    return this.products.reduce((sum, p) => sum + (p.sales ?? 0), 0);
  }

  get totalIngresos(): number {
    return this.products.reduce((sum, p) => sum + ((p.price ?? 0) * (p.sales ?? 0)), 0);
  }

  get totalStock(): number {
    return this.products.reduce((acc, p) => acc + (p.stock ?? 0), 0);
  }

  get averagePrice(): string {
    const total = this.products.reduce((acc, p) => acc + (p.price ?? 0), 0);
    return this.products.length ? (total / this.products.length).toFixed(2) : '0';
  }

  get averageSales(): string {
    const total = this.products.reduce((acc, p) => acc + (p.sales ?? 0), 0);
    return this.products.length ? (total / this.products.length).toFixed(1) : '0';
  }

  get topProduct(): Product | null {
    return this.products.reduce((top: Product | null, p: Product) =>
      !top || (p.sales ?? 0) > (top.sales ?? 0) ? p : top, null);
  }

  // Función trackByProductId para optimizar el *ngFor
  trackByProductId(index: number, product: Product): number {
    return product.id; // Retorna el id del producto para hacer el seguimiento
  }

  deleteProduct(id: number) {
    // Elimina el producto del arreglo local
    this.products = this.products.filter(p => p.id !== id);
  }

}
