import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Drug } from 'src/app/common/drug';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-product-drug-list',
  templateUrl: './product-drug-list.component.html',
  styleUrls: ['./product-drug-list.component.css'],
})
export class ProductDrugListComponent implements OnInit {
  drugList: Array<Drug> = [];
  dataSource: MatTableDataSource<Drug> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  selectedDrug: Drug = new Drug();
  errorMessage?: string;
  infoMessage?: string;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.findAllProducts();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  findAllProducts() {
    this.adminService.findAllDrugs().subscribe((data) => {
      this.drugList = data;
      this.dataSource.data = data;
    });
  }

  createNewDrugRequest() {
    this.selectedDrug = new Drug();
    $('#productModal').modal('show');
  }

  editDrugRequest(drug: Drug) {
    this.selectedDrug = drug;
    $('#productModal').modal('show');
  }

  saveDrug() {
    if (!this.selectedDrug.id) {
      this.createDrug();
    } else {
      this.updateDrug();
    }
  }

  createDrug() {
    this.adminService.createDrug(this.selectedDrug).subscribe({
      next: (data) => {
        this.drugList.push(data);
        this.dataSource = new MatTableDataSource(this.drugList);
        this.infoMessage = 'Creation is complete';
        $('#productModal').modal('hide');
      },
      error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      },
    });
  }

  updateDrug() {
    this.adminService.updateDrug(this.selectedDrug).subscribe({
      next: () => {
        let itemIndex = this.drugList.findIndex(
          (item) => item.id == this.selectedDrug.id
        );
        this.drugList[itemIndex] = this.selectedDrug;
        this.dataSource = new MatTableDataSource(this.drugList);
        this.infoMessage = 'Update is complete';
        $('#productModal').modal('hide');
      },
      error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      },
    });
  }

  deleteDrugRequest(drug: Drug) {
    this.selectedDrug = drug;
    $('#deleteModal').modal('show');
  }

  deleteDrug() {
    this.adminService.deleteDrug(this.selectedDrug).subscribe({
      next: () => {
        let itemIndex = this.drugList.findIndex(
          (item) => item.id == this.selectedDrug.id
        );
        if (itemIndex !== -1) {
          this.drugList.splice(itemIndex, 1);
        }
        this.dataSource = new MatTableDataSource(this.drugList);
        this.infoMessage = 'Delete is complete';
        $('#deleteModal').modal('hide');
      },
      error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      },
    });
  }
}

