import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';
import { CompanyService } from 'src/app/service/company/company.service';
import { pagination } from 'src/service/pagination.service';

type Index_l = {
  brand: string;
  name: string;
  stock: number;
  customer: string;
}


@Component({
  selector: 'app-connection',
  templateUrl: './connection.page.html',
  styleUrls: ['./connection.page.scss'],
})
export class ConnectionPage implements OnInit {
  createForm = new FormGroup({
    name: new FormControl(null),
    tel: new FormControl(null),
    owner: new FormControl(null),
    companyNumber: new FormControl(null),
    address: new FormControl(null)
  })

  pager: any;
  allItems: any;
  pagedItems: any;
  searchText: any;
  companys = [];
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

  selectedOption: number = 10;
  actions = [
    { id: 10, name: 10 },
    { id: 20, name: 20 },
    { id: 30, name: 30 }
  ]
  constructor(
    private http: HttpClient,
    private router: Router,
    private companyService: CompanyService,
    private route: ActivatedRoute,
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
    this.selectedOption;
    // this.deleteConnections();
  }


  dataChanged(number: number) {
    this.selectedOption = number;
    this.setPage(1);
    // console.log('testtesttest')
    // console.log(this.selectedOption)
}

  getConnections() {
    this.http.get<any[]>('http://localhost:3000/company').subscribe(result => {
      this.companys = result;
      // console.log(this.companys);
      this.allItems = this.companys;
      this.setPage(1);
    });
  }

  deleteConnections(id: number) {
    const company = this.companys.find(x => x.id === id);
    console.log(company);
    if (!company) { return; }
    this.companyService.delete(id)
      .pipe(first())
      .subscribe(() => this.companys = this.companys.filter(x => x.id !== id))
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagination.getPager(this.allItems.length, page, this.selectedOption);
    console.log('pager')
    console.log(this.pager)
    
    // this.pager.pageSize = pageSize;
    // this.pager.endIndex = pageSize-1;
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('pagedItems')
    console.log(this.pagedItems)
  }
}
