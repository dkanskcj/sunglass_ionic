import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private httpClient: HttpClient
  ) { }

  create(body:any) {
    return this.httpClient.post('http://localhost:3000/company', body);
  }
}
