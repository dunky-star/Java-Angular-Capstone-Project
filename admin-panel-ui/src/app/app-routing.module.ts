import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductDrugListComponent } from './components/admin/product-drug-list/product-drug-list.component';
import { TransactionListComponent } from './components/admin/transaction-list/transaction-list.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './common/role';

const routes: Routes = [
  //Main page
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //User pages
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotFoundComponent },
  { path: '401', component: UnauthorizedComponent },
  { path: '**', component: NotFoundComponent },

  // Below are pages that require login
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] },
  },

  //admin panel
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['/404']);
    };
  }
}
