import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
