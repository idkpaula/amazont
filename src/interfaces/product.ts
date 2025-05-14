export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precioAnterior?: number;
  oferta: boolean;
  cantidad: number;
  cat_id: number;
  imagen: string;
  sales?: number;
}
