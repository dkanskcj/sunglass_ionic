import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  // num?: number;
}


@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
  id: number;


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
          url: '/items'
        },
        {
          name: '재고 관리',
          url: '/stock'
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
          url: '/order'
        },
        {
          name: '교환 관리',
          url: '/exchange'
        },
        {
          name: '반품 관리',
          url: '/refund'
        },
        {
          name: '배송 관리',
          url: '/shipping'
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
          url: '/total_sales'
        },
        {
          name: '반품 정산 관리',
          url: '/total_refund_sales'
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

  menuClick(index) {
    this.activeIndex = index;
    console.log(this.activeIndex);
    // console.log(men);
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    // this.route.snapshot
  }

  ngOnInit() {
    // this.getIndex
    // this.route.queryParams.subscribe(params => {
    // this.id = params['id'];
    // console.log(this.id)
    // });
  }

}
