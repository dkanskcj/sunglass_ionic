import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

type Menu = {
  icon?: string;
  name: string;
  url?: string;
  children?: ChildrenMenu[];
  isOpen?: boolean;
}

type ChildrenMenu = {
  name: string;
  url: string;
  num?: number;
}


@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
  id: number;

  currentUrl: string;
  imgValue: string;
  menus: Menu[] = [
    {
      icon: 'assets/icons/dashboard.svg',
      name: '대쉬보드',
      url: '/dashboard'
    },
    {
      icon: 'assets/icons/item.svg',
      name: '상품',
      children: [
        {
          name: '상품 관리',
          url: '/items',
          num: 1
        },
        {
          name: '재고 관리',
          url: '/stock',
          num: 2
        }
      ],
      isOpen: false
    },
    {
      icon: 'assets/icons/sales.svg',
      name: '매출',
      children: [
        {
          name: '주문 관리',
          url: '/order',
          num: 3
        },
        {
          name: '교환 관리',
          url: '/exchange',
          num: 4
        },
        {
          name: '반품 관리',
          url: '/refund',
          num: 5
        },
        {
          name: '배송 관리',
          url: '/shipping',
          num: 6
        }
      ],
      isOpen: false
    },
    {
      icon: 'assets/icons/calc.svg',
      name: '정산',
      children: [
        {
          name: '매출 정산 관리',
          url: '/total_sales',
          num: 7
        },
        {
          name: '반품 정산 관리',
          url: '/total_refund_sales',
          num: 8
        }
      ],
      isOpen: false
    },
    {
      icon: 'assets/icons/name=user.svg',
      name: '고객 관리',
      url: '/customer'
    },
    {
      icon: 'assets/icons/basong.svg',
      name: '거래처 관리',
      url: '/company'
    },
    {
      icon: 'assets/icons/basong.svg',
      name: '사입 관리',
      url: '/buy'
    },
    {
      icon: 'assets/icons/basong.svg',
      name: '사입반품 관리',
      url: '/refund_buy'
    },
  ]

  isChildMenu = false;
  activeIndex = -1;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: (res) => {
        this.currentUrl = res['url'];
      }
    })
  }

  clickedChild(e: any){
    console.log(this.currentUrl)
    // if(this.currentUrl )
  }

  // menuClick(index: boolean) {
    
  //   this.isChildMenu = !index;
    
  //   this.imgValue = 'assets/icons/Dot.svg'
  //   console.log(this.route.params)
  //   console.log(this.isChildMenu)
  // // console.log(men);
  // }

}
