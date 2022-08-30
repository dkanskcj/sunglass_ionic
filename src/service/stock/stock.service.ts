import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stocks } from './stock-interface';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://localhost:3000/stocktest';

  stockList : stocks[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  getStock(id: number) {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  // stockEdit(stock){
  //   let present: Boolean = false;
  //   this.stockList.map((val, index)=>{
  //     if(val.id == stock.id) {this.stockList[index] = stock;present=true}
  //   });
  //   return present;
  // }
  


  create(body: any) {
    return this.httpClient.post(`${this.baseUrl}`, body);
  }
}
