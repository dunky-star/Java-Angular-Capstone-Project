import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from '../common/drug';
import { User } from '../common/user';

const API_URL = 'http://localhost:8181/api/admin/';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.headers = new HttpHeaders({
      authorization: 'Bearer ' + this.currentUser.token,
      'Content-Type': 'application/json; charset=UTF-8',
    });
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(API_URL + 'user-update', JSON.stringify(user), {
      headers: this.headers,
    });
  }

  deleteUser(user: User): Observable<any> {
    return this.http.post(API_URL + 'user-delete', JSON.stringify(user), {
      headers: this.headers,
    });
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'user-all',
    { headers: this.headers });
  }

  numberOfUsers(): Observable<any> {
    return this.http.get(API_URL + 'user-number',
    { headers: this.headers });
  }

  // drugs

  createDrug(drug: Drug): Observable<any> {
    return this.http.post(API_URL + 'drug-create', JSON.stringify(drug),
     {
      headers: this.headers,
    });
  }

  updateDrug(drug: Drug): Observable<any> {
    return this.http.put(API_URL + 'drug-update', JSON.stringify(drug),
    {
      headers: this.headers,
    });
  }

  deleteDrug(drug: Drug): Observable<any> {
    return this.http.post(API_URL + 'drug-delete', JSON.stringify(drug),
    {
      headers: this.headers,
    });
  }

  findAllDrugs(): Observable<any> {
    return this.http.get(API_URL + 'drug-all',
    { headers: this.headers });
  }

  numberOfDrugs(): Observable<any> {
    return this.http.get(API_URL + 'drug-number',
    { headers: this.headers });
  }

  //transactions

  findAllTransactions(): Observable<any> {
    return this.http.get(API_URL + 'transaction-all', {
      headers: this.headers,
    });
  }

  numberOfTransactions(): Observable<any> {
    return this.http.get(API_URL + 'transaction-number',
    {
      headers: this.headers,
    });
  }
}
