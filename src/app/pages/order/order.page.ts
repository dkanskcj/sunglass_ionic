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
  test: boolean;
  // ships = [];
  isOptionGroup: boolean = true;

  toggleOptionGroupSetting() {
    this.isOptionGroup = !this.isOptionGroup;
  }

  searchText: any;

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
        // this.test1();
      }
    })
    this.getConnections();
  }

  goDetail(ev:any, id:number){
    const { className } = ev.target;
    if(className.includes('checkbox')){
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
    console.log(this.orders)
  }

  isClicked(){
    this.test = !this.test;
  }
  
  // test1():string{
  //   if(this.orders.orderStatus = '주문승인'){
  //     console.log(this.orders.orderStatus)
  //     return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-green-50 border-green-200 text-green-500'
  //   }
  //   if(this.orders.orderStatus = '주문취소'){
  //     console.log(this.orders.orderStatus)
  //     return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-yellow-50 border-yellow-200 text-yellow-500'
  //   }
  //   if(this.orders.orderStatus = '주문대기'){
  //     console.log(this.orders.orderStatus)
  //     return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-gray-50 border-gray-200 text-gray-500'
  //   }
  //   if(this.orders.orderStatus = '주문거절'){
  //     return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-red-50 border-red-200 text-red-500'
  //   }
  // }
}
