import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { OrderService } from 'src/app/service/order/order.service';
import { pagination } from 'src/service/pagination.service';
import { ExchangeAddmissionComponent } from './exchange-addmission/exchange-addmission.component';
import { ExchangeAllCheckedComponent } from './exchange-all-checked/exchange-all-checked.component';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
  @ViewChildren('checkbox') checkboxes: QueryList<ElementRef>;

  pager: any;
  allItems: any;

  pagedItems: any;
  searchText: any;
  date1: any;
  date2: any;
  allChecked = false;
  orders: any;
  test: boolean;
  // ships = [];
  isOptionGroup: boolean = true;
  getDate: any;

  selectedOption = '0';
  selectedOption2 : number = 10;
  actions = [
    { id: '0', name: '교환상태 선택' },
    { id: '전체', name: '전체' },
    { id: '교환거절', name: '교환거절' },
    { id: '교환승인', name: '교환승인' },
    { id: '교환취소', name: '교환취소' }
  ]
  actions2 = [
    {id: 10, name: 10},
    {id: 20, name: 20},
    {id: 30, name: 30},
  ]



  toggleOptionGroupSetting() {
    this.isOptionGroup = !this.isOptionGroup;
  }
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
      }
    })
    this.getConnections();
  }

  goDetail(ev: any, id: number) {
    const { className } = ev.target;
    if (className.includes('checkbox')) {
      return;
    }

    this.router.navigateByUrl(`/exchange/${id}`);
  }

  getConnections() {
    this.http.get<any[]>('http://localhost:3000/ordertest').subscribe(result => {
      this.orders = result;
      console.log(this.orders)
      this.allItems = this.orders;
      this.setPage(1);
    });
  }

  getAuth() {
    console.log(this.orders.orderStatus)

  }

  isClicked(id: number) {
    console.log(id);
    this.test = !this.test;
  }

  checkAll() {
    for (const item of this.checkboxes) {
      if (this.allChecked) {
        item.nativeElement.checked = false;
      } else {
        item.nativeElement.checked = true;
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

  orderClass(status: any) {
    if (status === '주문승인') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-green-50 border-green-200 text-green-500'
    }
    if (status === '주문취소') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-yellow-50 border-yellow-200 text-yellow-500'
    }
    if (status === '주문대기') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-gray-50 border-gray-200 text-gray-500'
    }
    if (status === '주문거절') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-red-50 border-red-200 text-red-500'
    }
  }
  shippingClass(status: any){
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

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagination.getPager(this.allItems.length, page, this.selectedOption2);
    console.log('pager')
    console.log(this.pager)
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('pagedItems')
    console.log(this.pagedItems)
  }
 
  dataChanged(number: number) {
    this.selectedOption2 = number;
    this.setPage(1);
    // console.log('testtesttest')
    // console.log(this.selectedOption)
  }

  async setOpen() {
    const modal = await this.modalController.create({
      component: ExchangeAddmissionComponent,
      cssClass: 'addmission'
    })
    modal.present();
  }

  async setOpen2() {
    const modal = await this.modalController.create({
      component: ExchangeAllCheckedComponent,
      cssClass: 'addmission',
    })
    modal.present();
  }
}
