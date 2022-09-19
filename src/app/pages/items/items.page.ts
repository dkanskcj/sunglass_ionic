import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { pagination } from 'src/service/pagination.service';

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
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  pager: any;
  allItems: any;
  pagedItems: any;
  products=[];

  selectedOption: any;
  actions = [
    { id: 0, name: '옵션 선택' },
    { id: true, name: '판매중' },
    { id: false, name: '판매중지' }
  ]
  selectedOption2: number = 10;
  actions2 = [
    { id: 10, name: 10 },
    { id: 20, name: 20 },
    { id: 30, name: 30 }
  ]

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
    },
    {
      brand: '티쓰',
      name: '티쓰-001 블랙 썬글라스',
      stock: 120,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
    {
      brand: '티쓰',
      name: '티쓰-001 화이트 썬글라스',
      stock: 140,
      status: true,
      buy: '사입가 : 25,200원',
      sell: '판매가 : 30,000원',
      regist: '등록일자 : 2022-07-14',
      update: '수정일자 : 2022-07-15'
    },
  ];

  constructor(
    private http: HttpClient,
    private pagination: pagination
    ) { }

  ngOnInit() {
    // this.http.get<any[]>('http://localhost:3000/product').subscribe(result => {
    //   this.products=result;
    //   console.log(result);
    // });
    this.selectedOption2
    this.allItems = this.index_list;
    console.log(this.allItems)
    console.log(this.allItems.length)
    this.setPage(1);
  }

  searchText: any;
  dataChanged(number: number) {
    this.selectedOption = number;
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
  

}
