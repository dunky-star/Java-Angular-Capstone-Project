import { Component, OnInit } from '@angular/core';
import { DrugCategory } from 'src/app/common/drug-category';
import { DrugService } from 'src/app/services/drug.service';

@Component({
  selector: 'app-drug-category-menu',
  templateUrl: './drug-category-menu.component.html',
  styleUrls: ['./drug-category-menu.component.css']
})
export class DrugCategoryMenuComponent implements OnInit {

  drugCategories: DrugCategory[] = [];

  // Constructor injection of DrugService to expose the API URLs.
  constructor(private drugService: DrugService) { }

  ngOnInit() {
    this.listDrugCategories();
  }

  listDrugCategories() {
    this.drugService.getDrugCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.drugCategories = data;
      }
    );
  }

}
