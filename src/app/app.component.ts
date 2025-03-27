import { Component } from '@angular/core';
import { BarraBusquedaComponent } from "./barra-busqueda/barra-busqueda.component";
import { ProductoRecomendadoComponent } from "./producto-recomendado/producto-recomendado.component";
import { CategoriasDestacadasComponent } from './categorias-destacadas/categorias-destacadas.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraBusquedaComponent, ProductoRecomendadoComponent, CategoriasDestacadasComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazont';

  userMenuVisible = false;

  toggleUserMenu() {
    this.userMenuVisible = !this.userMenuVisible;
  }

  closeUserMenu() {
    this.userMenuVisible = false;
  }
}
