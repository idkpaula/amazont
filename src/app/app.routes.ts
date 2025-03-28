import { Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomePageComponent,
  },
  {
    path: 'Todas-Las-Categorias',
    title: 'Category page',
    component: CategoriasComponent,
    children: [
      { path: 'producto/:id', title: 'Detail Product Page', component: ProductDetailComponent }
    ]
  },
  { 
    path: 'register', 
    title: 'Register Page',
    component: RegisterComponent 
  },
  { 
    path: 'login', 
    title: 'Login Page',
    component: LoginComponent 
  },
  {
    path: 'cart',
    title: 'Cart Page',
    component: CartComponent,
    children: [
      { path: 'checkout', 
        title: 'Checkout Page',
        component: CheckoutComponent 
      }
    ] 
  },
  
];