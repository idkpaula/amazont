import { Component } from '@angular/core';
import { BarraBusquedaComponent } from "../barra-busqueda/barra-busqueda.component";
import { ProductoRecomendadoComponent } from "../producto-recomendado/producto-recomendado.component";
import { CategoriasDestacadasComponent } from "../categorias-destacadas/categorias-destacadas.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BarraBusquedaComponent, ProductoRecomendadoComponent, CategoriasDestacadasComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
