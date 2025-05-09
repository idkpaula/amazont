import { Component } from '@angular/core';
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
  styleUrl: './product-admin.component.css'
})
export class ProductAdminComponent {
  products: Product[] = [];
  form: Partial<Product> = {};
  editing: boolean = false;

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
  }

  resetForm() {
    this.form = {};
    this.editing = false;
  }

  get totalVentas(): number {
    return this.products.reduce((sum, p) => sum + (p.sales ?? 0), 0);
  }
  
  get totalIngresos(): number {
    return this.products.reduce((sum, p) => sum + ((p.price ?? 0) * (p.sales ?? 0)), 0);
  }

  get totalStock(): number {
    return this.products.reduce((acc, p) => acc + (p.stock ?? 0), 0);
  }

}
