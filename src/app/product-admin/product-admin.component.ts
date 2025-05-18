import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
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
  userId: number = 1; 
  @ViewChild('formElement') formElement!: ElementRef;
  @ViewChild('successMsg', { static: false }) successMsgElement!: ElementRef;

  successMessage: string = '';  // <-- Mensaje de éxito

  constructor(
    private conexionService: ConexionService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}


  ngOnInit() {
    this.conexionService.getUserProfile().subscribe({
      next: (profile) => {
        console.log('Perfil obtenido:', profile);
        this.userId = profile.user.id;
        this.cargarProductos();
      },
      error: (err) => {
        console.error('Error al obtener el perfil del usuario:', err);
        this.router.navigate(['/login']);
      }
    });
  }

  // Método para mostrar mensaje de éxito por 3 segundos
  showSuccessMessage(message: string) {
    this.successMessage = message;

    // Forzamos detección de cambios para que Angular actualice el DOM
    this.cd.detectChanges();

    // Ejecutamos el scroll dentro de NgZone para asegurarnos que detecta el cambio
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        if (this.successMsgElement) {
          this.successMsgElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50); // un pequeño delay para asegurar el render
    });

    // Limpia el mensaje después de 3 segundos
    setTimeout(() => {
      this.ngZone.run(() => {
        this.successMessage = '';
      });
    }, 3000);
  }

  cargarProductos() {
    this.conexionService.obtenerMisProductos(this.userId).subscribe({
      next: (res: any) => {
        if (res && Array.isArray(res.categorias)) {
          this.products = res.categorias.flatMap((cat: any) => cat.productos || []);
        } else {
          console.warn('La respuesta no contiene categorias');
          this.products = [];
        }
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
    const nuevoProducto = {
      ...this.form,
      user_id: this.userId,
      sales: 0
    };

    this.conexionService.crearProducto(nuevoProducto).subscribe({
      next: () => {
        this.cargarProductos();
        this.resetForm();
        this.showSuccessMessage('Producto creado con éxito');
      },
      error: (err) => {
        console.error('Error al crear producto:', err);
      }
    });
  }

  updateProduct() {
    if (!this.form.id) {
      console.error('No se puede actualizar un producto sin ID');
      return;
    }

    this.conexionService.actualizarProducto(this.form.id.toString(), this.form).subscribe({
      next: () => {
        this.cargarProductos();
        this.resetForm();
        this.showSuccessMessage('Producto actualizado con éxito');
      },
      error: (err) => {
        console.error('Error al actualizar producto:', err);
      }
    });
  }

  deleteProduct(id: number) {
    this.conexionService.eliminarProducto(id.toString()).subscribe({
      next: () => {
        this.cargarProductos();
        this.showSuccessMessage('Producto eliminado con éxito');
      },
      error: (err) => console.error('Error al eliminar producto:', err)
    });
  }

  edit(product: Product) {
    this.form = { ...product };
    this.editing = true;

    // Hacemos scroll suave al formulario
    setTimeout(() => {
      if (this.formElement && this.formElement.nativeElement) {
        this.formElement.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }


  resetForm() {
    this.form = {};
    this.editing = false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  get totalVentas() {
    return Array.isArray(this.products)
      ? this.products.reduce((sum, p) => sum + (p.sales ?? 0), 0)
      : 0;
  }

  get totalIngresos() {
    return Array.isArray(this.products)
      ? this.products.reduce((sum, p) => sum + ((p.precio ?? 0) * (p.sales ?? 0)), 0)
      : 0;
  }

  get totalStock() {
    return Array.isArray(this.products)
      ? this.products.reduce((acc, p) => acc + (p.cantidad ?? 0), 0)
      : 0;
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
