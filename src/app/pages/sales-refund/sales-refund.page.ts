import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { StockService } from 'src/app/service/stock/stock.service';
import { RegisterStockComponent } from '../stock/register-stock/register-stock.component';
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
  stocks = [];
  refundList: indexList[] = [
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자A',
      shippingCompany:'택배사A',
      refundCost:20000,
      shipCost:3000,
      refundStatus:'반품완료',
      refundApplication:'2022-07-14',
      refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자B',
      shippingCompany:'택배사B',
      refundCost:20000,
      shipCost:0,
      refundStatus:'반품대기중',
      refundApplication:'2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자C',
      shippingCompany:'택배사C',
      refundCost:20000,
      shipCost:3000,
      refundStatus:'반품완료',
      refundApplication:'2022-07-14',
      refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자A',
      shippingCompany:'택배사A',
      refundCost:20000,
      shipCost:3000,
      refundStatus:'반품취소',
      refundApplication:'2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자A',
      shippingCompany:'택배사A',
      refundCost:20000,
      shipCost:0,
      refundStatus:'반품중',
      refundApplication:'2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자A',
      shippingCompany:'택배사A',
      refundCost:20000,
      shipCost:3000,
      refundStatus:'반품중',
      refundApplication:'2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자A',
      shippingCompany:'택배사A',
      refundCost:20000,
      shipCost:0,
      refundStatus:'반품중',
      refundApplication:'2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자A',
      shippingCompany:'택배사A',
      refundCost:20000,
      shipCost:0,
      refundStatus:'반품중',
      refundApplication:'2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자A',
      shippingCompany:'택배사A',
      refundCost:20000,
      shipCost:3000,
      refundStatus:'반품중',
      refundApplication:'2022-07-14',
      // refundComplete:'2022-07-18'
    },
    {
      product: '티쓰-001 블랙 썬글라스',
      refundName:'주문자A',
      shippingCompany:'택배사A',
      refundCost:20000,
      shipCost:3000,
      refundStatus:'반품중',
      refundApplication:'2022-07-14',
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
  selectedOption = 0;
  actions = [
    { id: 0, name: '옵션 선택' },
    // { id: 1, name: '0개' },
    { id: 1, name: '1개' },
    { id: 2, name: '2개' },
    { id: 3, name: '3개' },
    { id: 4, name: '4개' },
    { id: 5, name: '5개' },
  ]
  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    private router: Router,
    private stockService: StockService,
  ) {
  }


  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: () => {
        this.getConnections();
      }
    })
    this.getConnections();
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

  // async setOpen(){
  //   const modal = await this.modalController.create({
  //     component: OrderAddmissionComponent,
  //     cssClass: 'addmission'
  //   })
  //   modal.present();
  // }
}
