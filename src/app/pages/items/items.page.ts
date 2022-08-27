import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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


  products=[];

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



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/product').subscribe(result => {
      console.log(result);
      this.products=result;
    });
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

}
