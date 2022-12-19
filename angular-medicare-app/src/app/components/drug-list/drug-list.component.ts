import { DrugService } from './../../services/drug.service';
import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/common/drug';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit{
  // An array of Drug.
  drugs: Drug[] = [];
  currentCategoryId: number =1;
  // Perform dependency injection of DrugService here so that Drug component can use the REST API.
  constructor(private drugService: DrugService,
    private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.route.paramMap.subscribe(() => {
      this.listDrugs();
    });
  }
  listDrugs() {

       // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }

     // now get the products for the given category id
    this.drugService.getDrugList(this.currentCategoryId).subscribe(
      data => {
        this.drugs = data;
      }
    )
  }

}
