import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DrugListComponent } from './components/drug-list/drug-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DrugService } from './services/drug.service';

@NgModule({
  declarations: [
    AppComponent,
    DrugListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [DrugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
