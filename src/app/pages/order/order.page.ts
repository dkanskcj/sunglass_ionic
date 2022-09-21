import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { filter, findIndex } from 'rxjs/operators';
import { OrderService } from 'src/app/service/order/order.service';
import { pagination } from 'src/service/pagination.service';
import { OrderAddmissionComponent } from './order-addmission/order-addmission.component';
import { IOrder } from 'src/app/service/order/order-interface';

type Index_l = {
  brand: string;
  name: string;
  stock: number;
  status: boolean;
  buy: string;
  sell: string;
  regist: string;
  update: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  @ViewChildren('checkbox') checkboxes: QueryList<ElementRef>;

  allChecked = false;
  orders: IOrder[];
  isChecked: boolean;
  // ships = [];
  isOptionGroup: boolean = true;

  toggleOptionGroupSetting() {
    this.isOptionGroup = !this.isOptionGroup;
  }

  modalData: IOrder[] = [];

  searchText: any;
  date1: string;
  date2: string;
  pagedItems: [];
  allItems: any;
  pager: any;
  getDate: any;

  selectedOption = '0';
  actions = [
    { id: '0', name: '주문상태 선택' },
    { id: '0', name: '전체' },
    { id: '주문대기', name: '주문대기' },
    { id: '주문거절', name: '주문거절' },
    { id: '주문승인', name: '주문승인' },
    { id: '주문취소', name: '주문취소' }
  ]
  selectedOption2 = 10;
  actions2 = [
    { id: 10, name: 10 },
    { id: 20, name: 20 },
    { id: 30, name: 30 },
  ]
  constructor(
    private http: HttpClient,
    private router: Router,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private pagination: pagination
  ) { }

  testId: number;
  testClicked(i: any) {
    this.date1 = i;
    console.log(this.date1);
  }
  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: () => {
        this.getConnections();
        // this.test1();
      }
    })
    // this.getConnections();
  }

  goDetail(ev: any, id: number) {
    const { className } = ev.target;
    if (className.includes('checkbox')) {
      return;
    }

    this.router.navigateByUrl(`/order/${id}`);
  }

  getConnections() {
    this.http.get<IOrder[]>('http://localhost:3000/ordertest').subscribe((result: IOrder[]) => {
      this.orders = result;
      this.allItems = this.orders
      this.setPage(1)
      console.log('getConnections() => ', this.orders)
    });
  }

  getAuth() {
  }

  async setOpen() {
    const modal = await this.modalController.create({
      component: OrderAddmissionComponent,
      cssClass: 'addmission',
      componentProps: {
        status: this.modalData
      }
    })
    modal.present();
    modal.onWillDismiss().then(res => {
      if(res.role !== 'closeModal'){
        this.getConnections();
      }
      // else{
        console.log('test')
      // }
    }
    )
  }

  isClicked(ev: any, index: number) {
    const { checked } = ev.target;
    if (checked) {
      console.log('isClicked ev => ', checked, 'number : ', index)
      console.log('isClicked if checked : ', checked)
      this.modalData.push(this.orders[index]);
    } else {
      this.modalData.pop();
      this.modalData.filter((item, i) => (item[index] = [null], i === index));
    }
  }

  checkAll(ev: any) {
    let i: number = 0;
    for (const item of this.checkboxes) {
      if (!this.allChecked) {
        this.isClicked(ev, i)
        i++;
        item.nativeElement.checked = true;
        if (i > this.checkboxes.length) {
          i = 0;
        }
      } else {
        i = 0;
        item.nativeElement.checked = false;
      }
    }
  }

  inputDate() {
    this.searchDate()
  }

  searchDate() {
    this.orderService.searchDate(this.date1).subscribe({
      next: (res) => {
        console.log(this.date1);
        this.getDate = res;
        console.log(res)
      },
      error: (error) => {

      }
    })
  }

  orderClass(state: any) {
    if (state === '주문승인') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-green-50 border-green-200 text-green-500'
    }
    if (state === '주문취소') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-yellow-50 border-yellow-200 text-yellow-500'
    }
    if (state === '주문대기') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-gray-50 border-gray-200 text-gray-500'
    }
    if (state === '주문거절') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-red-50 border-red-200 text-red-500'
    }
  }

  shippingClass(status: any) {
    if (status === '배송완료') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-green-50 border-green-200 text-green-500'
    }
    if (status === '배송대기중') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-gray-50 border-gray-200 text-gray-500'
    }
    if (status === '배송중') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-yellow-50 border-yellow-200 text-yellow-500'
    }
  }

  dataChanged(number: number) {
    this.selectedOption2 = number;
    this.setPage(1)
  }


  setPage(page: number) {
    this.pager = this.pagination.getPager(this.allItems.length, page, this.selectedOption2);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
