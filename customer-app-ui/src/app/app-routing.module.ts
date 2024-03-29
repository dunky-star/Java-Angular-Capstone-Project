import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Role } from './common/role';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { DrugListComponent } from './components/drug-list/drug-list.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  //error pages
  { path: '401', component: UnauthorizedComponent },
  { path: '404', component: NotFoundComponent },

  // Checkout requires login
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] },
  },

  // Order history requires login
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] },
  },


  // Main pages
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'drugs/:id', component: DrugDetailsComponent },
  { path: 'search/:keyword', component: DrugListComponent },
  { path: 'category/:id', component: DrugListComponent },
  { path: 'category', component: DrugListComponent },
  { path: 'drugs', component: DrugListComponent },
  { path: '', redirectTo: '/drugs', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    }
  }
}
