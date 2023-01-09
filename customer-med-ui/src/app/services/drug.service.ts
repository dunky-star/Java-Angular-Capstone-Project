import { Drug } from './../common/drug';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DrugCategory } from '../common/drug-category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DrugService {


  // API call to the backend REST for Drugs
  private baseUrl = environment.medicareApiUrl + '/drugs';

   // API call to the backend REST for Drug Category
  private categoryUrl = environment.medicareApiUrl + '/drug-category';

  constructor(private httpClient: HttpClient) { }



  getDrugDetails(theDrugId: number): Observable<Drug> {

    // We need to build the URL based on product id
    const drugUrl = `${this.baseUrl}/${theDrugId}`;

    return this.httpClient.get<Drug>(drugUrl);
  }


  getDrugList(theCategoryId: number): Observable<Drug[]> {

     // We need to build URL based on category id for Search drugs by category.
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseDrug>(searchUrl).pipe(
    map(response => response._embedded.drugs)
    );
  }

  // For pagination support home page
  getDrugsListPaginate(thePage: number,
                      thePageSize: number,
                      theCategoryId: number): Observable<GetResponseDrug> {

     // We need to build URL based on category id for Search drugs by category.
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                        + `&page=${thePage}&size=${thePageSize}`;;

    return this.httpClient.get<GetResponseDrug>(searchUrl);

  }


  getDrugCategories(): Observable<DrugCategory[]> {

    return this.httpClient.get<GetResponseDrugCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.drugCategory)
    );
  }


    searchDrugs(theKeyword: string): Observable<Drug[]> {

    // We need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.httpClient.get<GetResponseDrug>(searchUrl).pipe(
    map(response => response._embedded.drugs)
    );
  }


  // For pagination support Search on keyword, page and size.
  searchDrugsPaginate(thePage: number,
                      thePageSize: number,
                      theKeyword: string): Observable<GetResponseDrug> {

     // We need to build URL based on category id for Search drugs by category.
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                        + `&page=${thePage}&size=${thePageSize}`;;

    return this.httpClient.get<GetResponseDrug>(searchUrl);

  }


}

interface GetResponseDrug {
  _embedded: {
    drugs: Drug[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseDrugCategory {
  _embedded: {
    drugCategory: DrugCategory[];
  }
}
