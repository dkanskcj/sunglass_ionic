import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/service/company/company.service';
import { OrderService } from 'src/app/service/order/order.service';
import { ShippingService } from 'src/app/service/shipping/shipping.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  order: any
  orderId: number
  company: any
  companyId: number
  shipping: any
  shippingId: number

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private companyService: CompanyService,
    private shippingService: ShippingService
  ) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params['id']
    if(this.orderId){
      this.getOrder(this.orderId)
    }
  }

  getOrder(id:number){
    this.orderService.getOrder(id).subscribe({
      next: (res) => {
        // console.log(res)
        this.order = res;
        this.order.total_cost = this.order.amount*15000
        
        console.log(this.order.purchase)
        this.getShipping(this.order.orderNumber)
        this.companyId = this.order.companyId;
        this.getCompany(this.companyId)
      },
      error: (error) => {

      }
    })
  }
  getCompany(id: number){
    this.companyService.getCompany(id).subscribe({
      next: (res) => {
        console.log(res)
        this.company = res;
      },
      error: (error) => {

      }
    })
  }

  getShipping(id: number){
      this.shippingService.getShipping(id).subscribe({
        next: (res) => {
          console.log(res)
          this.shipping = res;
        },
        error: (error) => {

        }
      })
  }
}
