import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonFab, ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { CompanyService } from 'src/app/service/company/company.service';
import { IOrder } from 'src/app/service/order/order-interface';
import { OrderService } from 'src/app/service/order/order.service';
import { ShippingService } from 'src/app/service/shipping/shipping.service';
import { RefuseComponent } from './refuse/refuse.component';

type orderStatusInfo = {
  name: string;
}

enum OrderStatus {
  PENDING = '주문대기',
  SUCCESS = '주문승인',
  REJECT = '주문거절',
  CANCEL = '주문취소'
}


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit, AfterViewInit {

  order: IOrder;
  orderId: number
  company: any
  companyId: number
  shipping: any
  shippingId: number;
  radioCheckedIndex: number = -1;
  // testFormGroup?: FormGroup
  status = OrderStatus;

  statusOrders: orderStatusInfo[] = [
    {
      name: '주문대기'
    },
    {
      name: '주문승인'
    },
    {
      name: '주문거절'
    },
  ]

  testForm = new FormGroup({
    // phoneNumber: new FormControl(null),
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

  ngAfterViewInit(): void {
  }

  change(ev) {
    console.log(ev);
  }

  getOrder(id: number) {
    this.orderService.getOrder(id).subscribe({
      next: (res: IOrder) => {
        this.order = res;
        this.order.totalCost = this.order.amount * 15000
        this.getShipping(this.order.orderNumber)
        this.companyId = this.order.orderNumber;
        this.getCompany(this.companyId)
        this.testForm.controls['orderStatus'].setValue(res.orderStatus);
        // this.testForm.controls['phoneNumber'].setValue(res.phoneNumber);
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
    const body = this.testForm.getRawValue();
    // body.phoneNumber = parseInt(body.phoneNumber)
    console.log('updateOrder => ', body)
    this.orderService.update(this.orderId, body).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/order')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  test: boolean = false;
  checked(id: number) {
    if (this.order.orderStatus = '주문승인') {
      return !this.test
    }
  }

  isOrderStatusChecked(status: OrderStatus) {
    if(this.order.orderStatus === OrderStatus.CANCEL){
    }
    if(this.order.orderStatus === OrderStatus.REJECT){
    }
    // if(this.order.orderStatus === OrderStatus.SUCCESS){
    //   console.log('hi', this.order.orderStatus)
    // }
    else{
      this.testForm.controls['orderStatus'].setValue(status);
      console.log('isOrderStatusChecked => ', status)
    }
  }

  async setOpen() {
    const modal = await this.modalController.create({
      id: 'REJECT',
      component: RefuseComponent,
      cssClass: 'order_refuse',
      componentProps: {
        status: this.order.orderStatus
      }
    })
    modal.present();
    modal.onWillDismiss().then(res => {
      console.log('onWillDismiss => ', res);
      if (res.data != null) {
        this.testForm.controls['orderStatus'].setValue(this.status.REJECT);
      }
    })
  }




  getOrderStatus(status: any) {
    if (status === '주문승인') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-green-50 border-green-200 text-green-500';
    }
    if (status === '주문취소') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-yellow-50 border-yellow-200 text-yellow-500';
    }
    if (status === '주문대기') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-gray-50 border-gray-200 text-gray-500';
    }
    if (status === '주문거절') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-red-50 border-red-200 text-red-500';
    }
  }
  
  getShippingStatus(status: any){
    if(status === '배송완료'){
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-green-50 border-green-200 text-green-500'
    }
    if(status === '배송중'){
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-yellow-50 border-yellow-200 text-yellow-500'
    }
    if(status === '배송대기중'){
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-gray-50 border-gray-200 text-gray-500'
    }
  }
}
