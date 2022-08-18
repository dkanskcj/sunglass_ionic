import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddStockComponent } from '../stock/add-stock/add-stock.component';


type index_l = {
  sort: string;
  stock_variance: string;
  stock: number;
  cost: string;
  total_cost: string;
  reason: string;
  date: string;
}


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.page.html',
  styleUrls: ['./stock-detail.page.scss'],
})
export class StockDetailPage implements OnInit {
  searchText: any;

  index_list: index_l[] = [
    {
      sort: '입고',
      stock_variance: '+100',
      stock: 200,
      cost: '20,000원',
      total_cost: '2,000,000원',
      reason: '-',
      date: '2022.12.31'
    },
    {
      sort: '입고 취소',
      stock_variance: '-10',
      stock: 100,
      cost: '20,000',
      total_cost: '200,000',
      reason: '물량부족',
      date: '2022.12.30'
    },
    {
      sort: '입고',
      stock_variance: '+10',
      stock: 110,
      cost: '20,000',
      total_cost: '200,000',
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '출고',
      stock_variance: '-10',
      stock: 100,
      cost: '20,000',
      total_cost: '200,000',
      reason: '제품 하자',
      date: '2022.12.30'
    },
    {
      sort: '매출',
      stock_variance: '-10',
      stock: 110,
      cost: '20,000',
      total_cost: '200,000',
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '매출 취소',
      stock_variance: '+10',
      stock: 120,
      cost: '20,000',
      total_cost: '200,000',
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '매출 취소',
      stock_variance: '+10',
      stock: 110,
      cost: '20,000',
      total_cost: '200,000',
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '출고',
      stock_variance: '-10',
      stock: 110,
      cost: '20,000',
      total_cost: '200,000',
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '입고',
      stock_variance: '+10',
      stock: 120,
      cost: '20,000',
      total_cost: '200,000',
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '입고',
      stock_variance: '+10',
      stock: 110,
      cost: '20,000',
      total_cost: '200,000',
      reason: '-',
      date: '2022.12.30'
    },
  ];

  constructor(private modalContorller:ModalController) { }

  ngOnInit() {
  }

  async setOpen(){
    const modal = await this.modalContorller.create({
      component: AddStockComponent,
      cssClass: 'add_stock'
    })
    modal.present();
  }
}
