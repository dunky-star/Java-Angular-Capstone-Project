import { DrugService } from './../../services/drug.service';
import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/common/drug';

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.css']
})
export class DrugListComponent implements OnInit{
  // An array of Drug.
  drugs: Drug[] = [];
  // Perform dependency injection of DrugService here so that Drug component can use the REST API.
  constructor(private drugService: DrugService){

  }

  ngOnInit(): void {
    this.listDrugs();
  }
  listDrugs() {
    this.drugService.getDrugList().subscribe(
      data => {
        this.drugs = data;
      }
    )
  }

}
