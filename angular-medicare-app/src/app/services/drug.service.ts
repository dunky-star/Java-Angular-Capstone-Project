import { Drug } from './../common/drug';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  // API call to the backend REST
  private baseUrl = 'http://localhost:8585/api/drugs';

  constructor(private httpClient: HttpClient) { }

  getDrugList(theCategoryId: number): Observable<Drug[]> {

     // We need to build URL based on category id for Search drugs by category.
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
    map(response => response._embedded.drugs)
    );
  }

}

interface GetResponse {
  _embedded: {
    drugs: Drug[];
  }
}
