import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StockService } from 'src/app/service/stock/stock.service';
import { AddStockComponent } from '../add-stock/add-stock.component';

type index_l = {
  sort: string;
  stock_variance: number;
  stock?: number;
  totalStock?: number;
  cost: number;
  totalCost?: number;
  reason: string;
  date: string;
  addDate?: number;
}


@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.page.html',
  styleUrls: ['./stock-detail.page.scss'],
})
export class StockDetailPage implements OnInit {
  searchText: any;

  stock: any
  jaego: number = 200;
  stockId: number;
  index_list: index_l[] = [
    {
      sort: '입고',
      stock_variance: 100,
      // stock: 200,
      cost: 20000,
      reason: '-',
      date: '2022.12.31',
    },
    {
      sort: '입고',
      stock_variance: 10,
      // stock: 100,
      cost: 20000,
      reason: '물량부족',
      date: '2022.12.30'
    },
    {
      sort: '입고',
      stock_variance: 10,
      // stock: 110,
      cost: 20000,
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '출고',
      stock_variance: -10,
      // stock: 100,
      cost: 20000,
      reason: '제품 하자',
      date: '2022.12.30'
    },
    {
      sort: '출고',
      stock_variance: -10,
      // stock: 110,
      cost: 20000,
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '출고',
      stock_variance: +10,
      // stock: 120,
      cost: 20000,
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '출고',
      stock_variance: -10,
      // stock: 110,
      cost: 20000,
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '출고',
      stock_variance: -10,
      // stock: 110,
      cost: 20000,
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '입고',
      stock_variance: 10,
      // stock: 120,
      cost: 20000,
      reason: '-',
      date: '2022.12.30'
    },
    {
      sort: '입고',
      stock_variance: 10,
      // stock: 110,
      cost: 20000,
      reason: '-',
      date: '2022.12.30'
    },
  ];

  selectedSortingOption = '0'
  sortingActions = [
    { id: '0', value: '전체' },
    { id: '입고', value: '입고' },
    { id: '출고', value: '출고' },
  ]



  constructor(
    private modalContorller: ModalController,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private stockService: StockService
  ) { }
  i: number = 0;
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
        for(this.i=0; this.i<this.index_list.length; this.i++){
          this.index_list[this.i].stock = this.stock.stock;
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  testStock(id: number) {
    this.stockService.getStock(id).subscribe({
      next: () => {

      },
      error: (error) => {

      }
    })
  }
  getJaego(index: number){
    console.log(this.index_list[index])
    this.index_list[index].stock = this.stock.stock;
  }
  // getStocks() {
  //   this.http.get<any[]>('http://localhost:3000/stocktest').subscribe(result => {
  //     // console.log(result);
  //     this.stock = result;
  //   });
  // }
  addStockDetail(index: any) {
    this.index_list.push(index);
  }

  async setOpen() {
    const modal = await this.modalContorller.create({
      component: AddStockComponent,
      cssClass: 'add_stock'
    })
    modal.present();
    modal.onWillDismiss().then(res => {
      if (res.data) {
        this.index_list.push(res.data)
      }
    })
  }
}
