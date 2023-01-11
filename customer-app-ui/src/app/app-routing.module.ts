import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Role } from './common/role';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductDrugListComponent } from './components/admin/product-drug-list/product-drug-list.component';
import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { DrugListComponent } from './components/drug-list/drug-list.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AdminTemplateComponent } from './components/template/admin-template/admin-template.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
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

  // Checkout requires login
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] },
  },

  // Profile requires login
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] },
  },

  //Access to admin panel requires logion
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },
  {
    path: 'product-drug-list',
    component: ProductDrugListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
  },

  {
    path: 'transaction-list',
    component: TransactionListComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },
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
