import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order-interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:3000/ordertest';
  orderList : Order[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getOrder(id: number){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  
  getOrdertest(orderNumber: number){
    return this.httpClient.get(`${this.baseUrl}/${orderNumber}`);
  }
  

  searchDate(date1: any){
    return this.httpClient.get(`${this.baseUrl}/search?date=${date1}`);
  }


  update(orderNumber: number, body: any){
    return this.httpClient.put(`${this.baseUrl}/${orderNumber}`, body)
  }

}
