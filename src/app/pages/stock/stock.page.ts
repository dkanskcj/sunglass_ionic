import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { StockService } from 'src/service/stock/stock.service';
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

  constructor(
    private modalController: ModalController,
    private http: HttpClient,
    private router: Router,
    private stockService: StockService,
    // private formBuilder: FormBuilder
  ) {
    // this.updateStockForm = this.formBuilder.group({
    //   id: [""],
    //   company: [""],
    //   products: [""],
    //   stock: [""],
    //   cost : [],
    //   totalCost: [],
    //   stock_option: [],
    // });
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
      // console.log(result);
      this.stocks = result;
    });
  }
  // submit(){
  //   // const body = this.createForm.getRawValue();
  //   // console.log(body)
  //   this.stockService.create(body).subscribe({
  //     next: (res) => {
  //       this.router.navigateByUrl('/company')
  //     },
  //     error: (error) => {
  //       console.log(error)
  //     }
  //   })
  // }
  // formControl = new FormControl('', [
  //   Validators.required
  // ]);

  async setOpen() {
    const modal = await this.modalController.create({
      component: RegisterStockComponent,
      cssClass: 'mymodal'
    })
    modal.present();
    console.log(Validators.required);
  }



}
