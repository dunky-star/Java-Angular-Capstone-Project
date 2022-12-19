import { Drug } from './../common/drug';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DrugCategory } from '../common/drug-category';

@Injectable({
  providedIn: 'root'
})

export class DrugService {


  // API call to the backend REST for Drugs
  private baseUrl = 'http://localhost:8585/api/drugs';

   // API call to the backend REST for Drug Category
  private categoryUrl = 'http://localhost:8585/api/drug-category';

  constructor(private httpClient: HttpClient) { }

  getDrugList(theCategoryId: number): Observable<Drug[]> {

     // We need to build URL based on category id for Search drugs by category.
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseDrug>(searchUrl).pipe(
    map(response => response._embedded.drugs)
    );
  }


  getDrugCategories(): Observable<DrugCategory[]> {

    return this.httpClient.get<GetResponseDrugCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.drugCategory)
    );
  }

}

interface GetResponseDrug {
  _embedded: {
    drugs: Drug[];
  }
}

interface GetResponseDrugCategory {
  _embedded: {
    drugCategory: DrugCategory[];
  }
}
