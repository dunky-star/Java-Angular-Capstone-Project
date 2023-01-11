import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userCount: any = '';
  drugCount: any = '';
  transactionCount: any = '';

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.numberOfUsers();
    this.numberOfDrugs();
    this.numberOfTransactions();
  }

  numberOfUsers() {
    this.adminService.numberOfUsers().subscribe((data: { response: any }) => {
      this.userCount = data.response;
    });
  }

  numberOfDrugs() {
    this.adminService.numberOfDrugs().subscribe((data: { response: any }) => {
        this.drugCount = data.response;
      });
  }

  numberOfTransactions() {
    this.adminService.numberOfTransactions().subscribe((data: { response: any }) => {
        this.transactionCount = data.response;
      });
  }
}
