import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { }


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private baseUrl = 'http://localhost:3000/company';
  


  companyList = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  getCompanys() {
    return this.companyList;
  }

  getCompany(id: number) {
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }

  create(body: any) {
    return this.httpClient.post(`${this.baseUrl}`, body);
  }

}
