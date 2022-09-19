import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { StockService } from 'src/app/service/stock/stock.service';
import { pagination } from 'src/service/pagination.service';
import { RegisterStockComponent } from '../stock/register-stock/register-stock.component';
import { CustomerBurdenComponent } from './customer-burden/customer-burden.component';
import { ReturnCompleteComponent } from './return-complete/return-complete.component';
import { ReturnCompanyBurdenComponent } from './return/return-company-burden/return-company-burden.component';
import { ReturnCustomerBurdenComponent } from './return/return-customer-burden/return-customer-burden.component';
import { ShippingCompanyBurdenComponent } from './shipping-company-burden/shipping-company-burden.component';
type Index_l = {
  brand: string;
  name: string;
  stock: number;
  customer: string;
}

type indexList = {
  product: string;
  refundName: string;
  shippingCompany: string;
  refundCost: number;
  shipCost: number;
  refundStatus: string;
  refundApplication: string;
  refundComplete?: string;
}
@Component({
  selector: 'app-sales-refund',
  templateUrl: './sales-refund.page.html',
  styleUrls: ['./sales-refund.page.scss'],
})
export class SalesRefundPage implements OnInit {

  isModalOpen = false;
  searchText: any;
  orders: any;
  pager: any;
  allItems: any;
  pagedItems: any;
  stocks = [];

  refunds: any;

  refundList: indexList[] = [
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 20000,
      shipCost: 3000,
      refundStatus: '반품완료',
      refundApplication: '2022-07-14',
      refundComplete: '2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자B',
      shippingCompany: '택배사B',
      refundCost: 20000,
      shipCost: 0,
      refundStatus: '반품대기중',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자C',
      shippingCompany: '택배사C',
      refundCost: 20000,
      shipCost: 3000,
      refundStatus: '반품완료',
      refundApplication: '2022-07-14',
      refundComplete: '2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 20000,
      shipCost: 3000,
      refundStatus: '반품취소',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 20000,
      shipCost: 0,
      refundStatus: '반품중',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 20000,
      shipCost: 3000,
      refundStatus: '반품중',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 20000,
      shipCost: 0,
      refundStatus: '반품중',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 20000,
      shipCost: 0,
      refundStatus: '반품중',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 20000,
      shipCost: 3000,
      refundStatus: '반품중',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 20000,
      shipCost: 3000,
      refundStatus: '반품중',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName: '주문자A',
      shippingCompany: '택배사A',
      refundCost: 200001,
      shipCost: 3000,
      refundStatus: '반품중',
      refundApplication: '2022-07-14',
      // refundComplete:'2022-07-18'
    },
  ]


  index_list: Index_l[] = [
    {
      brand: '티쓰',
      name: '티쓰-001 블랙 썬글라스',
      stock: 100,
      customer: '거래처A 외 3곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-002 블랙 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-003 블랙 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-004 블랙 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-001 블루 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-001 레드 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-001 옐로우 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-001 그린 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-001 화이트 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
    {
      brand: '티쓰',
      name: '티쓰-002 화이트 썬글라스',
      stock: 0,
      customer: '거래처B 외 2곳',
    },
  ];

  updateStockForm: FormGroup;
  Stock: any;
  selectedOption = '0';
  actions = [
    { id: '0', name: '옵션 선택' },
    { id: '반품대기중', name: '반품대기중' },
    { id: '반품취소', name: '반품취소' },
    { id: '반품중', name: '반품중' },
    { id: '반품완료', name: '반품완료' }
  ]
  selectedOption2 = 10;
  actions2 = [
    { id: 10, name: 10 },
    { id: 20, name: 20 },
    { id: 30, name: 30 },
  ]
  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    private router: Router,
    private stockService: StockService,
    private pagination: pagination
  ) {
  }


  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: () => {
        this.getConnections();
      }
    })
    this.getConnections();
    this.allItems = this.refundList
    this.setPage(1)
  }

  async setOpen() {
    const modal = await this.modalController.create({
      component: RegisterStockComponent,
      cssClass: 'mymodal'
    })
    modal.present();
    console.log(Validators.required);
  }


  goDetail(ev: any, id: number) {
    const { className } = ev.target;
    if (className.includes('checkbox')) {
      return;
    }

    this.router.navigateByUrl(`/order/${id}`);
  }

  getConnections() {
    this.http.get<any[]>('http://localhost:3000/ordertest').subscribe(result => {
      this.orders = result;
      console.log(this.orders)
    });
  }

  getAuth() {
    console.log(this.orders.orderStatus)
  }
  
  handleApprove(){
    console.log('test')
  }

  dataChanged(number: number) {
    this.selectedOption2 = number;
    this.setPage(1);
    // console.log('testtesttest')
    // console.log(this.selectedOption)
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagination.getPager(this.allItems.length, page, this.selectedOption2);
    console.log('pager')
    console.log(this.pager)

    // this.pager.pageSize = pageSize;
    // this.pager.endIndex = pageSize-1;
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('pagedItems')
    console.log(this.pagedItems)
  }

  async handleModalTest(index: number) {
    const component = this.refundList[index].shipCost === 0 ? ShippingCompanyBurdenComponent : CustomerBurdenComponent;
    const cssClass = this.refundList[index].shipCost === 0 ? 'companyRefund' : 'customerRefund';
    const modal = await this.modalController.create({
      component,
      cssClass,
      componentProps:{
        salesRefund : this.refundList[index]
      }
    })
    this.refunds = this.refundList[index];
    modal.present();
  }

  async handleModalOpen(index: number) {
    if (this.pagedItems[index].refundStatus === '반품중') {
      const component = this.pagedItems[index].shipCost === 0 ? ReturnCompanyBurdenComponent : ReturnCustomerBurdenComponent;
      const cssClass = this.pagedItems[index].shipCost === 0 ? 'returningCompany' : 'returningCustomer';
      const modal = await this.modalController.create({
        component,
        cssClass,
        componentProps:{
          salesRefund : this.pagedItems[index]
        }
      })
      modal.present();
    }
    if (this.pagedItems[index].refundStatus === '반품대기중') {
      const component = this.pagedItems[index].shipCost === 0 ? ShippingCompanyBurdenComponent : CustomerBurdenComponent;
      const cssClass = this.pagedItems[index].shipCost === 0 ? 'companyRefund' : 'customerRefund';
      const modal = await this.modalController.create({
        id: 'refundPending',
        component,
        cssClass,
        componentProps:{
          salesRefund : this.pagedItems[index],
        }
      })
      modal.present();
    }
    if(this.pagedItems[index].refundStatus === '반품완료') {
      const modal = await this.modalController.create({
        component: ReturnCompleteComponent,
        cssClass: 'returnComplete',
        componentProps:{
          salesRefund : this.pagedItems[index]
        }
      })
      modal.present();
    }
  }
}
