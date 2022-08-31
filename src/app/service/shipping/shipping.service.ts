import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipping } from './shipping-interface';
@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  private baseUrl = 'http://localhost:3000/shipping';
  shippingList : Shipping[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  getShipping(id: number){
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
