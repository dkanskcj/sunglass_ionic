import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, findIndex } from 'rxjs/operators';
import { OrderService } from 'src/app/service/order/order.service';

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
  orders: any;
  
  // ships = [];
  isOptionGroup: boolean = true;

  toggleOptionGroupSetting() {
    this.isOptionGroup = !this.isOptionGroup;
  }

  searchText: any;

  index_list: Index_l[] = [
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: false,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-011 블랙 썬글라스',
      stock: 100,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    }
  ];

  constructor(
    private http: HttpClient,
    private router: Router,
    private orderService: OrderService,
    private route: ActivatedRoute
  ) { }

  testId: number;

  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: () => {
        this.getConnections();
      }
    })
    this.getConnections();
  }

  getConnections() {
    this.http.get<any[]>('http://localhost:3000/ordertest').subscribe(result => {
      this.orders = result;
      console.log(this.orders)
    });
  }

  getAuth() {
    console.log(this.orders)
  }
}
