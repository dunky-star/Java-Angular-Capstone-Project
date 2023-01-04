import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { Role } from './common/role';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { DrugListComponent } from './components/drug-list/drug-list.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  //error pages
  { path: '404', component: NotFoundComponent },
  { path: '401', component: UnauthorizedComponent },

  // Checkout requires login
  {
    path: 'checkout',
    component: CheckoutComponent,
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (_error: any) => {
      this.router.navigate(['/404']);
    };
  }
}
