import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DrugListComponent } from './components/drug-list/drug-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DrugService } from './services/drug.service';
import { Routes, RouterModule} from '@angular/router';
import { DrugCategoryMenuComponent } from './components/drug-category-menu/drug-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { DrugDetailsComponent } from './components/drug-details/drug-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { NotFoundComponent } from './components/error/not-found/not-found.component';
import { UnauthorizedComponent } from './components/error/unauthorized/unauthorized.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { AdminTemplateComponent } from './components/template/admin-template/admin-template.component';
import { UserTemplateComponent } from './components/template/user-template/user-template.component';
import { LoginComponent } from './components/user/login/login.component';


const routes: Routes = [

  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'drugs/:id', component: DrugDetailsComponent},
  {path: 'search/:keyword', component: DrugListComponent},
  {path: 'category/:id', component: DrugListComponent},
  {path: 'category', component: DrugListComponent},
  {path: 'drugs', component: DrugListComponent},
  {path: '', redirectTo: '/drugs', pathMatch: 'full'},
  {path: '**', redirectTo: '/drugs', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DrugListComponent,
    DrugCategoryMenuComponent,
    SearchComponent,
    DrugDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginStatusComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    UserListComponent,
    ProductListComponent,
    AdminTemplateComponent,
    UserTemplateComponent,
    LoginComponent
     ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [DrugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
