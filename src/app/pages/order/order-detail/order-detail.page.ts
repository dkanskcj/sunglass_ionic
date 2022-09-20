import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CompanyService } from 'src/app/service/company/company.service';
import { Order } from 'src/app/service/order/order-interface';
import { OrderService } from 'src/app/service/order/order.service';
import { ShippingService } from 'src/app/service/shipping/shipping.service';
import { RefuseComponent } from './refuse/refuse.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  order: Order
  orderId: number
  company: any
  companyId: number
  shipping: any
  shippingId: number
  // testFormGroup?: FormGroup
  testForm = new FormGroup({
    phoneNumber: new FormControl(null),
    orderStatus: new FormControl(null),
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
      next: (res: Order) => {
        // console.log(res)
        this.order = res;
        this.order.totalCost = this.order.amount * 15000
        // console.log(this.order.purchase)
        this.getShipping(this.order.orderNumber)
        this.companyId = this.order.orderNumber;
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
    // this.orderService.update(this.orderId, body).subscribe({
    //   next: (res) => {
    //     this.router.navigateByUrl('/order')
    //   },
    //   error: (error) => {
    //     console.log(error)
    //   }
    // })
  }

  test: boolean = false;
  checked(id: number) {
    if (this.order.orderStatus = '주문승인') {
      return !this.test
    }
  }
  async setOpen() {
    const modal = await this.modalController.create({
      component: RefuseComponent,
      cssClass: 'order_refuse'
    })
    modal.present();
  }

  getOrderStatus(state: any){
    if(this.order.orderStatus = '주문승인'){
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-green-50 border-green-200 text-green-500';
    }
    if(this.order.orderStatus = '주문취소'){
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-yellow-50 border-yellow-200 text-yellow-500';
    }
    if(this.order.orderStatus = '주문대기'){
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-gray-50 border-gray-200 text-gray-500';
    }
    if(this.order.orderStatus = '주문거절'){
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-red-50 border-red-200 text-red-500';
    }
  }
}
