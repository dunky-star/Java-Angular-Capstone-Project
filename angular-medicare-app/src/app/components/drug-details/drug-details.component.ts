import { Drug } from 'src/app/common/drug';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrugService } from 'src/app/services/drug.service';

@Component({
  selector: 'app-drug-details',
  templateUrl: './drug-details.component.html',
  styleUrls: ['./drug-details.component.css']
})
export class DrugDetailsComponent implements OnInit {

  drug: Drug = new Drug();

  constructor(private drugService: DrugService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleDrugDetails();
    })
  }

  handleDrugDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theDrugId: number = +this.route.snapshot.paramMap.get('id')!;

    this.drugService.getDrugDetails(theDrugId).subscribe(
      data => {
        this.drug = data;
      }
    )
  }

}
