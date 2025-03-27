import { Categoria } from '../models/categoria.model';
import { Producto } from '../models/producto.model';

export const CATEGORIAS: Categoria[] = [
  { id: 1, nombre: 'Electrónica', imagen: 'https://www.redeweb.com/wp-content/uploads/2023/10/electronica-digital-scaled.jpg' },
  { id: 2, nombre: 'Moda', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4BYicgD74WLZiXrrhJC-ZETgE6riwfYSOA&s' },
  { id: 3, nombre: 'Hogar', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBvu-xqVm-Xtqm515QsfHfjDHkKI24zMlxw&s' },
  { id: 4, nombre: 'Deportes', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4aCIZ2v2zejYBCs90Xhm4l4lSZoYgj4ELA&s' },
  { id: 5, nombre: 'Iluminación', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TwPlRHKkcz5vBAHMLJkWg1NspYqRsPcsGg&s' },
  { id: 6, nombre: 'Juguetes', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHGpThys_x6eRHeqVxWXpFGMFVvV5BRUo2g&s' },
  { id: 7, nombre: 'Belleza', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolD3Cjj8M0BXGGHQRedD9KyPkogQ4phPztw&s' },
  { id: 8, nombre: 'Libros', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrd55DjA2K-YhceSVn-ETet9_xPRn1IrcyrQ&s' }
];

export const PRODUCTOS: Producto[] = [
  // Categoría electrónica
  { id: 1, nombre: 'Portátil', precio: 1200, descripcion: 'Portátil de última generación', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4F5eT_FMiwxaX3ysMCOggegGNbIq0kQLEg&s', categoriaId: 1 },
  { id: 2, nombre: 'Smartphone', precio: 800, descripcion: 'Móvil de alta gama', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvy0M4E9_Vorh5pce0gQiZSsQUVBenipAdw&s', categoriaId: 1 },
  { id: 3, nombre: 'Auriculares', precio: 150, descripcion: 'Auriculares inalámbricos', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslvaqyFyY_Oda0FhIS-hG7rgwm0eoCj2A4w&s', categoriaId: 1 },
  { id: 4, nombre: 'Televisor 4K', precio: 900, descripcion: 'Smart TV UHD 55"', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UI7C0KCGJZwzFjfSbX8KTGG0pjcX8bwCTQ&s', categoriaId: 1 },
  { id: 5, nombre: 'Tablet', precio: 500, descripcion: 'Tablet con pantalla de 10 pulgadas', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5P6Sqeu6lWy7JkUDPcVxEjTs7B4XgxBbqw&s', categoriaId: 1 },
  { id: 6, nombre: 'Cámara Reflex', precio: 1100, descripcion: 'Cámara profesional', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMykQEJrUNb-ojhS1qW3F4P0N-aQCoFuwk6w&s', categoriaId: 1 },
  { id: 7, nombre: 'Consola de juegos', precio: 600, descripcion: 'Consola de última generación', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VDolYwlnMyPPeKAyfkqy2LJ5piRWzj8GDg&s', categoriaId: 1 },
  { id: 8, nombre: 'Monitor 27"', precio: 300, descripcion: 'Monitor gaming 144Hz', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgL9nwsxx_VHMwvEFt_iRwOKKJBeo0vYR6Q&s', categoriaId: 1 },
  { id: 9, nombre: 'Teclado mecánico', precio: 120, descripcion: 'Teclado retroiluminado', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVgcyRtrWkJWog5FRKxFIgiQ2PaSG2bKliA&s', categoriaId: 1 },
  { id: 10, nombre: 'Ratón gaming', precio: 80, descripcion: 'Ratón inalámbrico', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD86HBVnUqc9J3tcSfqmlgbBafIpXRvA00Fw&s', categoriaId: 1 },

  // Categoría moda
  { id: 1, nombre: 'Camiseta', precio: 20, descripcion: 'Camiseta 100% algodón', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-KGbJ0lRLZ9PFpYZpkgv5zme10iY1FzijqA&s', categoriaId: 2 },
  { id: 2, nombre: 'Camiseta Casual', precio: 25, descripcion: 'Camiseta de algodón unisex', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZBs23-8H5jLKNnzbvzD8xm3xM4y3maOCqA&s', categoriaId: 2 },
  { id: 3, nombre: 'Jeans Clásicos', precio: 45, descripcion: 'Vaqueros de mezclilla azul', imagen: 'https://mgsolucion.com/wp-content/uploads/2023/06/jean-clasico-MG-600x436-2.jpg', categoriaId: 2 },
  { id: 4, nombre: 'Zapatillas Deportivas', precio: 60, descripcion: 'Tenis cómodos para uso diario', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_vwMASRSgWdJNNAiB7Eqx0zqbPS_g1qn_A&s', categoriaId: 2 },
  { id: 5, nombre: 'Vestido Elegante', precio: 80, descripcion: 'Vestido para ocasiones especiales', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxmV-_IPk6A8ggefS8tBmsr9yFde0rPoICw&s', categoriaId: 2 },
  { id: 6, nombre: 'Chaqueta de Cuero', precio: 120, descripcion: 'Chaqueta resistente y moderna', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ATy8O0KkIFQc0e07U1piNWQIp-LaWiHArw&s', categoriaId: 2 },
  { id: 7, nombre: 'Bolso de Mano', precio: 50, descripcion: 'Bolso elegante para toda ocasión', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDhl-DMB-UY42zO3AS9JSbGNeFiwnpRHvJQ&s', categoriaId: 2 },
  { id: 8, nombre: 'Reloj de Pulsera', precio: 90, descripcion: 'Reloj moderno con correa ajustable', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BXyqfRfDAcMdhBiZt5XtVbfB4szCLS4mfA&s', categoriaId: 2 },
  { id: 9, nombre: 'Bufanda de Lana', precio: 30, descripcion: 'Bufanda ideal para el invierno', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP06M7I9FreHfrtfHGVDsrwryAZ9C_9PHNcQ&s', categoriaId: 2 },
  { id: 10, nombre: 'Gorra Estilizada', precio: 20, descripcion: 'Gorra deportiva con diseño moderno', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUhRifNYk7BWIjqdBMxZtznvFv3Odro2j-A&s', categoriaId: 2 },

  // Categoría Hogar
  { id: 1, nombre: 'Aspiradora Inteligente', precio: 150, descripcion: 'Aspiradora robot con sensores avanzados', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZ07I7YTRgBuyvnpYT1v5lysl95W-7Q8z6w&s', categoriaId: 3 },
  { id: 2, nombre: 'Cafetera Automática', precio: 90, descripcion: 'Cafetera con molinillo integrado', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5NKFuqLvRAoC0-MlfuzbsMEZCzqja-gbAQ&s', categoriaId: 3 },
  { id: 3, nombre: 'Juego de Sábanas', precio: 40, descripcion: 'Sábanas de algodón de alta calidad', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYiN5kSt871MU0n_fu0znjLwi2VcIP5Iir-Q&s', categoriaId: 3 },
  { id: 4, nombre: 'Ventilador de Torre', precio: 75, descripcion: 'Ventilador silencioso con control remoto', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyadB9vaoM3kSucy9ohby3S50TU9NF-nruFQ&s', categoriaId: 3 },
  { id: 5, nombre: 'Set de Ollas', precio: 110, descripcion: 'Ollas antiadherentes de acero inoxidable', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh3I6jkupwBTIj7f8r3a1hdG-9VY1WzJZlA&s', categoriaId: 3 },
  { id: 6, nombre: 'Sofá de 3 Plazas', precio: 500, descripcion: 'Sofá amplio y cómodo', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwQZIQEyEj9VfGEpt8N2LtL1MeNOlMjX17Ng&s', categoriaId: 3 },
  { id: 7, nombre: 'Lámpara de Pie', precio: 60, descripcion: 'Lámpara moderna para sala de estar', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxwAgwEbkkLKDJceLWdk4y0NJHRXZ0L91Sg&s', categoriaId: 3 },
  { id: 8, nombre: 'Espejo Decorativo', precio: 35, descripcion: 'Espejo con marco de madera', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIQm8FsCGQfPKplHsTCFnoyGMMPdRnbQmAg&s', categoriaId: 3 },
  { id: 9, nombre: 'Cortinas Blackout', precio: 50, descripcion: 'Cortinas opacas para bloquear la luz', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrj2ls5yj_t5qWDqkZo7QQmmsRpmkFLGoIBA&s', categoriaId: 3 },
  { id: 10, nombre: 'Purificador de Aire', precio: 120, descripcion: 'Purificador con filtro HEPA', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTviUXPDfTI4oDh4ZobMNP4EkriIHwidq6FBw&s', categoriaId: 3 },

  // Categoría Deportes
  { id: 1, nombre: 'Bicicleta de Montaña', precio: 500, descripcion: 'Bicicleta con suspensión y frenos de disco', imagen: '', categoriaId: 4 },
  { id: 2, nombre: 'Balón de Fútbol', precio: 30, descripcion: 'Balón oficial de cuero sintético', imagen: '', categoriaId: 4 },
  { id: 3, nombre: 'Pesas Ajustables', precio: 120, descripcion: 'Set de pesas de 10kg a 50kg', imagen: '', categoriaId: 4 },
  { id: 4, nombre: 'Raqueta de Tenis', precio: 90, descripcion: 'Raqueta ligera con encordado resistente', imagen: '', categoriaId: 4 },
  { id: 5, nombre: 'Cuerda para Saltar', precio: 20, descripcion: 'Cuerda con mango ergonómico', imagen: '', categoriaId: 4 },
  { id: 6, nombre: 'Casco para Ciclismo', precio: 50, descripcion: 'Casco aerodinámico con ventilación', imagen: '', categoriaId: 4 },
  { id: 7, nombre: 'Guantes de Boxeo', precio: 70, descripcion: 'Guantes de cuero sintético acolchonados', imagen: '', categoriaId: 4 },
  { id: 8, nombre: 'Reloj Deportivo', precio: 150, descripcion: 'Reloj con GPS y monitor de ritmo cardíaco', imagen: '', categoriaId: 4 },
  { id: 9, nombre: 'Rodillo para Yoga', precio: 25, descripcion: 'Rodillo de espuma para estiramientos', imagen: '', categoriaId: 4 },
  { id: 10, nombre: 'Set de Natación', precio: 40, descripcion: 'Gorro, gafas y aletas para nadar', imagen: '', categoriaId: 4 },

  // Categoría Iluminación
  { id: 1, nombre: 'Lámpara de Mesa LED', precio: 35, descripcion: 'Lámpara LED ajustable con base de madera', imagen: '', categoriaId: 5 },
  { id: 2, nombre: 'Focos Inteligentes', precio: 50, descripcion: 'Focos LED controlables por voz y app', imagen: '', categoriaId: 5 },
  { id: 3, nombre: 'Lámpara de Techo Moderno', precio: 70, descripcion: 'Lámpara de techo con diseño minimalista', imagen: '', categoriaId: 5 },
  { id: 4, nombre: 'Luz Nocturna para Niños', precio: 20, descripcion: 'Luz LED suave y de colores para niños', imagen: '', categoriaId: 5 },
  { id: 5, nombre: 'Foco Exterior LED', precio: 40, descripcion: 'Foco resistente a la intemperie para jardines', imagen: '', categoriaId: 5 },
  { id: 6, nombre: 'Apliques de Pared', precio: 45, descripcion: 'Apliques de pared para interiores modernos', imagen: '', categoriaId: 5 },
  { id: 7, nombre: 'Lámpara de Pie', precio: 60, descripcion: 'Lámpara de pie ajustable con luz cálida', imagen: '', categoriaId: 5 },
  { id: 8, nombre: 'Proyector LED', precio: 120, descripcion: 'Proyector LED para crear efectos de luz', imagen: '', categoriaId: 5 },
  { id: 9, nombre: 'Foco de Colores RGB', precio: 30, descripcion: 'Foco RGB para crear ambientes personalizados', imagen: '', categoriaId: 5 },
  { id: 10, nombre: 'Paneles LED Inteligentes', precio: 80, descripcion: 'Paneles LED que se controlan por app', imagen: '', categoriaId: 5 },

  // Categoría Juguetes
  { id: 1, nombre: 'Muñeca Interactiva', precio: 45, descripcion: 'Muñeca que habla y canta', imagen: '', categoriaId: 6 },
  { id: 2, nombre: 'Triciclo para Niños', precio: 80, descripcion: 'Triciclo con estructura de acero', imagen: '', categoriaId: 6 },
  { id: 3, nombre: 'Bloques de Construcción', precio: 30, descripcion: 'Bloques de plástico para crear figuras', imagen: '', categoriaId: 6 },
  { id: 4, nombre: 'Peluche Gigante', precio: 50, descripcion: 'Peluche suave y grande de 1 metro', imagen: '', categoriaId: 6 },
  { id: 5, nombre: 'Juego de Mesa', precio: 25, descripcion: 'Juego de mesa para 4 jugadores', imagen: '', categoriaId: 6 },
  { id: 6, nombre: 'Patinete Eléctrico', precio: 120, descripcion: 'Patinete eléctrico con motor de 250W', imagen: '', categoriaId: 6 },
  { id: 7, nombre: 'Kit de Pintura', precio: 18, descripcion: 'Kit de pintura con pinceles y acuarelas', imagen: '', categoriaId: 6 },
  { id: 8, nombre: 'Robot Programable', precio: 90, descripcion: 'Robot interactivo que puede ser programado', imagen: '', categoriaId: 6 },
  { id: 9, nombre: 'Set de Dinosaurios', precio: 15, descripcion: 'Set de figuras de dinosaurios para jugar', imagen: '', categoriaId: 6 },
  { id: 10, nombre: 'Coche de Control Remoto', precio: 35, descripcion: 'Coche a control remoto para carreras', imagen: '', categoriaId: 6 },

  // Categoría Belleza
  { id: 1, nombre: 'Maquillaje Completo', precio: 50, descripcion: 'Set de maquillaje con base, sombra y labial', imagen: '', categoriaId: 7 },
  { id: 2, nombre: 'Crema Hidratante', precio: 30, descripcion: 'Crema hidratante para rostro y cuerpo', imagen: '', categoriaId: 7 },
  { id: 3, nombre: 'Cepillo Facial', precio: 20, descripcion: 'Cepillo eléctrico para limpieza facial', imagen: '', categoriaId: 7 },
  { id: 4, nombre: 'Esmalte de Uñas', precio: 10, descripcion: 'Set de esmaltes de uñas de colores vibrantes', imagen: '', categoriaId: 7 },
  { id: 5, nombre: 'Acondicionador para el Cabello', precio: 15, descripcion: 'Acondicionador para un cabello suave y brillante', imagen: '', categoriaId: 7 },
  { id: 6, nombre: 'Mascarilla Facial', precio: 12, descripcion: 'Mascarilla de arcilla para purificar la piel', imagen: '', categoriaId: 7 },
  { id: 7, nombre: 'Perfume Floral', precio: 60, descripcion: 'Perfume de notas florales y frutales', imagen: '', categoriaId: 7 },
  { id: 8, nombre: 'Set de Brochas de Maquillaje', precio: 25, descripcion: 'Set de brochas profesionales para maquillaje', imagen: '', categoriaId: 7 },
  { id: 9, nombre: 'Crema Antiedad', precio: 45, descripcion: 'Crema para prevenir arrugas y líneas de expresión', imagen: 'a', categoriaId: 7 },
  { id: 10, nombre: 'Aceite Corporal', precio: 18, descripcion: 'Aceite hidratante para el cuidado de la piel', imagen: '', categoriaId: 7 },

  // Categoría Libros
  { id: 1, nombre: 'Alas de sangre', precio: 25.55, descripcion: 'Una historia de amor, misterio y sacrificio en un mundo oscuro lleno de secretos.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9U7hNYmFwVK-vKVaH7j7-0j8YpTGOJh3q1w&s', categoriaId: 8 },
  { id: 2, nombre: 'Alas de hierro', precio: 25.55, descripcion: 'Un thriller fascinante sobre lealtad, traición y la lucha por el poder.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXK0nKqeik6N_ajMlOyHecUqOFJyy17hOfw&s', categoriaId: 8 },
  { id: 3, nombre: 'Alas de Onix', precio: 22.70, descripcion: 'Una novela épica de fantasía donde la magia y la aventura se entrelazan en un universo increíble.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMo5LYWIGXsDIKaKBLjgJW2-QcgCTgffbQw&s', categoriaId: 8 },
  { id: 4, nombre: 'Un millón de besos para ti', precio: 18.95, descripcion: 'Una emotiva historia de amor y superación que tocará tu corazón.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxqhAe3cUt9vmKMyvLgf96ifP7yTPuexCzg&s', categoriaId: 8 },
  { id: 5, nombre: 'Culpa mía', precio: 7.95, descripcion: 'Una historia apasionada que explora el amor prohibido y las decisiones difíciles.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75kX5zKdQHFgXlSUTaz09g6d2Ass_gfTCog&s', categoriaId: 8 },
  { id: 6, nombre: 'Culpa tuya', precio: 8.75, descripcion: 'La continuación de la historia de Culpa mía, donde el amor y el destino se entrelazan aún más.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRO2hkSKDXPUhiIHxfxKY-tXYxMWSIG4nAgg&s', categoriaId: 8 },
  { id: 7, nombre: 'Culpa nuestra', precio: 8.29, descripcion: 'El final esperado de Culpa mía y culpa tuya, donde se resuelven todos los dilemas y sentimientos encontrados.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR57B7y6uA_bkka7oIECYJxv4V0QjQH4V_4w&s', categoriaId: 8 },
  { id: 8, nombre: '30 sunsets para enamorarte', precio: 25.83, descripcion: 'Un relato conmovedor sobre el amor, la aventura y el tiempo compartido.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovOTV0yND3zqXCyoGxNqDrsqW3OeA3m4VaA&s', categoriaId: 8 },
  { id: 9, nombre: '10.000 millas para encontrarte', precio: 17.38, descripcion: 'Un viaje por el mundo en busca de respuestas y del amor verdadero.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDU2InFtNyRYRmpRDhFMAv_ABGKVYkplwVCQ&s', categoriaId: 8 },
  { id: 10, nombre: 'Dulce veneno', precio: 18.50, descripcion: 'Un thriller psicológico que explora los límites entre el amor y la obsesión.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyiVS0XqsEj63ZYBj4P9QUwTa2q60NmqVBA&s', categoriaId: 8 },
  { id: 11, nombre: 'La sombra del viento', precio: 19.99, descripcion: 'Un misterioso thriller literario sobre un libro olvidado que cambia la vida de quien lo lee.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6I6jdEvPx-huovs3lPVp5clWjo6rzRV-fxw&s', categoriaId: 8 },
  { id: 12, nombre: 'El código Da Vinci', precio: 22.50, descripcion: 'Un thriller histórico que te lleva a través de enigmas religiosos y secretos ocultos por siglos.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2TGzVraIjtLIhmZAFIH-lOr9McvlhRq6tA&s', categoriaId: 8 },
  { id: 13, nombre: 'Los juegos del hambre', precio: 18.75, descripcion: 'Una distopía futurista que narra la lucha por la supervivencia en un mundo dividido y opresivo.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlX-QEK-jarw3oZyCMds1cbHiRSuVFkiQvMg&s', categoriaId: 8 },
  { id: 14, nombre: 'Cien años de soledad', precio: 21.60, descripcion: 'Una saga familiar épica que narra la historia de los Buendía, con elementos de realismo mágico.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBx9vbf3vdxUKWjRu5YeOH6MJui_p7PvwKQ&s', categoriaId: 8 },
  { id: 15, nombre: 'Matar a un ruiseñor', precio: 23.10, descripcion: 'Una reflexión profunda sobre la moralidad, la justicia y la lucha por la igualdad en el sur de Estados Unidos.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjAJsoEs5IeHhiwxRbNIwYfxgLZWKJrGQyg&s', categoriaId: 8 },
  { id: 16, nombre: '1984', precio: 17.95, descripcion: 'Una de las novelas distópicas más influyentes, donde el autor examina el control totalitario sobre la sociedad.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOqPIa7adHeoaeZl8ZqyOJ59U3JXCsKSMBw&s', categoriaId: 8 },
  { id: 17, nombre: 'El gran Gatsby', precio: 19.80, descripcion: 'Un relato clásico sobre el amor, la obsesión y el exceso en la sociedad americana de los años 20.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8hsiLo3JrTzaZWiSG41vo2aFRskRUfY-yQ&s', categoriaId: 8 },
  { id: 18, nombre: 'Orgullo y prejuicio', precio: 16.30, descripcion: 'Un clásico romántico que explora el amor, el orgullo y los prejuicios en la sociedad inglesa del siglo XIX.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTelqvQnZ-JXBLKytnvVIqy-tCFN8YWLw456A&s', categoriaId: 8 },
  { id: 19, nombre: 'El alquimista', precio: 18.40, descripcion: 'Una novela de autodescubrimiento, aventuras y sabiduría que inspira a seguir tus sueños.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5QpSf8zbYRkO5WDTlE0sl3qI4j_CJLcYwQ&s', categoriaId: 8 },
  { id: 20, nombre: 'El principito', precio: 15.75, descripcion: 'Una historia tierna y filosófica sobre un pequeño príncipe que explora el mundo y la importancia de lo esencial.', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfIa_ALgII7z2oPSt3Cj6lvYx5bf_vFCJ6Q&s', categoriaId: 8 }
];
