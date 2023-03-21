import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [
  { path: 'productos', component: ProductsComponent },
  { path: 'clientes', component: ClientsComponent },
  { path: 'cuentas', component: PurchasesComponent },
  { path: 'productos/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: '/cuentas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
