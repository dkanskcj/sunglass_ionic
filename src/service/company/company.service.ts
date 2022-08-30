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

  // findAll(): Observable<any[]>{
  //   return this.httpClient.get<any[]>('$(this.baseUrl)');
  // }

  getCompanys() {
    return this.companyList;
  }

  getCompany(id: number) {
    // return this.httpClient.get(`http://localhost:3000/company/${id}`);
    return this.httpClient.get<any[]>(`${this.baseUrl}`);
  }
  // getCompanytest(test: any){
  //   return this.httpClient.get<any[]>(`${this.baseUrl}`);
  // }

  create(body: any) {
    return this.httpClient.post(`${this.baseUrl}`, body);
  }

  // getCompany(id){
  //   this.companyList.map(val=>{
  //     if(val.id == id) this.companyList = val;
  //   });
  //   console.log("getCompany(id) : "+this.companyList);
  //   return this.companyList
  // }

}
