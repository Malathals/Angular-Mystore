import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ConformationComponent} from './components/conformation/conformation.component'

const routes: Routes = [
  {path: "", component: ProductListComponent},
  {path: 'product/:id', component: ProductItemDetailsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'message', component: ConformationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
