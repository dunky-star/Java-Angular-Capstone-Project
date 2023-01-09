import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Drug } from 'src/app/common/drug';
import { AdminService } from 'src/app/services/admin.service';
declare var $: any;

@Component({
  selector: 'app-product-drug-list',
  templateUrl: './product-drug-list.component.html',
  styleUrls: ['./product-drug-list.component.css'],
})
export class ProductDrugListComponent implements OnInit {
  productList: Array<Drug> = [];
  dataSource: MatTableDataSource<Drug> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'unitPrice', 'action'];
  selectedProduct: Drug = new Drug();
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
      this.productList = data;
      this.dataSource.data = data;
    });
  }

  createNewProductRequest() {
    this.selectedProduct = new Drug();
    $('#productModal').modal('show');
  }

  editProductRequest(product: Drug) {
    this.selectedProduct = product;
    $('#productModal').modal('show');
  }

  saveProduct() {
    if (!this.selectedProduct.id) {
      this.createProduct();
    } else {
      this.updateProduct();
    }
  }

  createProduct() {
    this.adminService.createDrug(this.selectedProduct).subscribe({
      next: (data) => {
        this.productList.push(data);
        this.dataSource = new MatTableDataSource(this.productList);
        this.infoMessage = 'Mission is completed';
        $('#productModal').modal('hide');
      },
      error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      },
    });
  }

  updateProduct() {
    this.adminService.updateDrug(this.selectedProduct).subscribe({
      next: () => {
        let itemIndex = this.productList.findIndex(
          (item) => item.id == this.selectedProduct.id
        );
        this.productList[itemIndex] = this.selectedProduct;
        this.dataSource = new MatTableDataSource(this.productList);
        this.infoMessage = 'Operation is completed';
        $('#productModal').modal('hide');
      },
      error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      },
    });
  }

  deleteProductRequest(product: Drug) {
    this.selectedProduct = product;
    $('#deleteModal').modal('show');
  }

  deleteProduct() {
    this.adminService.deleteDrug(this.selectedProduct).subscribe({
      next: () => {
        let itemIndex = this.productList.findIndex(
          (item) => item.id == this.selectedProduct.id
        );
        if (itemIndex !== -1) {
          this.productList.splice(itemIndex, 1);
        }
        this.dataSource = new MatTableDataSource(this.productList);
        this.infoMessage = 'Mission is completed';
        $('#deleteModal').modal('hide');
      },
      error: () => {
        this.errorMessage = 'Unexpected error occurred.';
      },
    });
  }
}

