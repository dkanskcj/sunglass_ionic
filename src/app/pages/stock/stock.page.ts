import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { StockService } from 'src/app/service/stock/stock.service';
import { pagination } from 'src/service/pagination.service';
import { RegisterStockComponent } from './register-stock/register-stock.component';

type Index_l = {
  brand: string;
  name: string;
  stock: number;
  customer: string;
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  isModalOpen = false;
  searchText: any;
  allItems : any[];
  pagedItems: any[];
  pager: any;
  stocks = [];
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
  }
  getConnections() {
    this.http.get<any[]>('http://localhost:3000/stocktest').subscribe(result => {
      this.stocks = result;
      this.allItems = this.stocks;
      this.setPage(1)
    });
  }

  async setOpen() {
    const modal = await this.modalController.create({
      component: RegisterStockComponent,
      cssClass: 'mymodal'
    })
    modal.present();
    console.log(Validators.required);
  }

  setPage(page: number){
    this.pager = this.pagination.getPager(this.allItems.length, page, this.selectedOption2);
    console.log(this.pager)
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log(this.pagedItems)
  }

}
