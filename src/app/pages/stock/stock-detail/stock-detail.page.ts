import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { stocks } from 'src/service/stock/stock-interface';
import { StockService } from 'src/service/stock/stock.service';
import { AddStockComponent } from '../add-stock/add-stock.component';

type index_l = {
  sort: string;
  stock_variance: string;
  stock: number;
  cost: string;
  total_cost: string;
  reason: string;
  date: string;
  testnum?: number;
}


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.page.html',
  styleUrls: ['./stock-detail.page.scss'],
})
export class StockDetailPage implements OnInit {
  searchText: any;

  stock: any

  stockId: number;
  index_list: index_l[] = [
    {
      sort: '입고',
      stock_variance: '+100',
      stock: 200,
      cost: '20,000원',
      total_cost: '2,000,000원',
      reason: '-',
      date: '2022.12.31',
      testnum: 123456789
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

  constructor(
    private modalContorller: ModalController,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }

  ngOnInit() {
    this.stockId = this.route.snapshot.params['id']
    if (this.stockId) {
      this.getStock(this.stockId);
    }
  }

  getStock(id: number) {
    this.stockService.getStock(id).subscribe({
      next: (res) => {
        console.log(res)
        this.stock = res;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  testStock(id:number){
    this.stockService.getStock(id).subscribe({
      next: () => {
        
      },
      error: (error) => {

      }
    })
  }

  // getStocks() {
  //   this.http.get<any[]>('http://localhost:3000/stocktest').subscribe(result => {
  //     // console.log(result);
  //     this.stock = result;
  //   });
  // }


  async setOpen() {
    const modal = await this.modalContorller.create({
      component: AddStockComponent,
      cssClass: 'add_stock'
    })
    modal.present();
  }
}
