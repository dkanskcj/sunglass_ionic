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

  getOrder(orderNumber: number){
    return this.httpClient.get(`${this.baseUrl}/${orderNumber}`);
  }
  
  getOrdertest(orderNumber: number){
    return this.httpClient.get(`${this.baseUrl}/${orderNumber}`);
  }
}
