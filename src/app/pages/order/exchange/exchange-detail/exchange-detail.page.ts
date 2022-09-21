import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CompanyService } from 'src/app/service/company/company.service';
import { IOrder } from 'src/app/service/order/order-interface';
import { OrderService } from 'src/app/service/order/order.service';
import { ShippingService } from 'src/app/service/shipping/shipping.service';




@Component({
  selector: 'app-exchange-detail',
  templateUrl: './exchange-detail.page.html',
  styleUrls: ['./exchange-detail.page.scss'],
})
export class ExchangeDetailPage implements OnInit {

  order: IOrder
  orderId: number
  company: any
  companyId: number
  shipping: any
  shippingId: number
  // testFormGroup?: FormGroup
  testForm = new FormGroup({
    phoneNumber: new FormControl(null),
  })
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private companyService: CompanyService,
    private shippingService: ShippingService,
    private router: Router,
    private modalController: ModalController
    // private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params['id']
    if (this.orderId) {
      this.getOrder(this.orderId)

    }
    console.log(this.orderId)

    // this.testForm.controls['phoneNumber'].setValue(this.order.phoneNumber);
  }

  getOrder(id: number) {
    this.orderService.getOrder(id).subscribe({
      next: (res: IOrder) => {
        // console.log(res)
        this.order = res;
        this.order.totalCost = this.order.amount * 15000

        // console.log(this.order.purchase)
        this.getShipping(this.order.orderNumber)
        this.companyId = this.order.companyId;
        this.getCompany(this.companyId)
      },
      error: (error) => {

      }
    })
  }
  getCompany(id: number) {
    this.companyService.getCompany(id).subscribe({
      next: (res) => {
        console.log(res)
        this.company = res;
      },
      error: (error) => {

      }
    })
  }

  getShipping(id: number) {
    this.shippingService.getShipping(id).subscribe({
      next: (res) => {
        console.log(res)
        this.shipping = res;
      },
      error: (error) => {

      }
    })
  }

  updateOrder() {
    console.log(this.order);
  }

  updateOrdertest() {
    const body = this.testForm.getRawValue();
    body.phoneNumber = parseInt(body.phoneNumber)
    console.log(body)
    this.orderService.update(this.orderId, body).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/order')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
