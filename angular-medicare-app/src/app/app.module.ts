import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DrugListComponent } from './components/drug-list/drug-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DrugService } from './services/drug.service';
import { Routes, RouterModule} from '@angular/router';
import { DrugCategoryMenuComponent } from './components/drug-category-menu/drug-category-menu.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
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
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
     HttpClientModule
  ],
  providers: [DrugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
