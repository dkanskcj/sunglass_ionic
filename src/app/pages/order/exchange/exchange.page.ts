import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { OrderService } from 'src/app/service/order/order.service';
import { ExchangeAddmissionComponent } from './exchange-addmission/exchange-addmission.component';
import { ExchangeAllCheckedComponent } from './exchange-all-checked/exchange-all-checked.component';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.page.html',
  styleUrls: ['./exchange.page.scss'],
})
export class ExchangePage implements OnInit {
  @ViewChildren('checkbox') checkboxes: QueryList<ElementRef>;

  searchText: any;
  date1: any;
  date2: any;
  allChecked = false;
  orders: any;
  test: boolean;
  // ships = [];
  isOptionGroup: boolean = true;
  getDate: any;

  toggleOptionGroupSetting() {
    this.isOptionGroup = !this.isOptionGroup;
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private orderService: OrderService,
    private route: ActivatedRoute,
    private modalController: ModalController
  ) { }

  testId: number;
  testClicked(i: any) {
    this.date1 = i;
    console.log(this.date1);
  }
  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: () => {
        this.getConnections();
        // this.test1();
      }
    })
    this.getConnections();
  }

  goDetail(ev: any, id: number) {
    const { className } = ev.target;
    if (className.includes('checkbox')) {
      return;
    }

    this.router.navigateByUrl(`/exchange/${id}`);
  }

  getConnections() {
    this.http.get<any[]>('http://localhost:3000/ordertest').subscribe(result => {
      this.orders = result;
      console.log(this.orders)
    });
  }

  getAuth() {
    console.log(this.orders.orderStatus)

  }

  isClicked(id: number) {
    console.log(id);
    this.test = !this.test;
  }

  checkAll() {
    for (const item of this.checkboxes) {
      if (this.allChecked) {
        item.nativeElement.checked = false;
      } else {
        item.nativeElement.checked = true;
      }
    }
  }
  inputDate() {
    this.searchDate()
  }
  searchDate() {
    this.orderService.searchDate(this.date1).subscribe({
      next: (res) => {
        console.log(this.date1);
        this.getDate = res;
        console.log(res)
      },
      error: (error) => {

      }
    })
  }


  async setOpen(){
    const modal = await this.modalController.create({
      component: ExchangeAddmissionComponent,
      cssClass: 'addmission'
    })
    modal.present();
  }

  async setOpen2(){
    const modal = await this.modalController.create({
      component: ExchangeAllCheckedComponent,
      cssClass: 'addmission'
    })
    modal.present();
  }
}
