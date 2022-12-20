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
  previousCategoryId: number =1;
  searchMode: boolean = false;

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

   previousKeyword: string = "";


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
     this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchDrugs();
    }
    else {
      this.handleListDrugs();
    }

  }
  handleSearchDrugs() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // if we have a different keyword than previous
    // then set thePageNumber to 1

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    // now search for the products using keyword
    this.drugService.searchDrugsPaginate(this.thePageNumber - 1,
                                         this.thePageSize,
                                        theKeyword).subscribe(this.processResult());

  }

  handleListDrugs() {

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


     /**
      * Check if we have a different category than previous
      * NB: Angular will reuse a component if it is currently being viewed
      * if we have a different category id than previous
      * then set thePageNumber back to 1
     */
    if (this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

     // now get the drugs for the given category id
     // now get the products for the given category id
    this.drugService.getDrugsListPaginate(this.thePageNumber - 1,
                                         this.thePageSize,
                                         this.currentCategoryId)
                                               .subscribe(
                                                data => {
                                                  this.drugs = data._embedded.drugs;
                                                  this.thePageNumber = data.page.number + 1;
                                                  this.thePageSize = data.page.size;
                                                  this.theTotalElements = data.page.totalElements;
                                                }
                                               );
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listDrugs();
  }

  processResult() {
    return (data: any) => {
      this.drugs = data._embedded.drugs;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }


}
