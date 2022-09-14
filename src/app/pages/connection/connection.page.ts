import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';
import { CompanyService } from 'src/app/service/company/company.service';
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
    name:new FormControl(null),
    tel:new FormControl(null),
    owner:new FormControl(null),
    companyNumber:new FormControl(null),
    address:new FormControl(null)
  })

  searchText: any;
  companys=[];
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
  constructor(
    private http: HttpClient, 
    private router:Router, 
    private companyService: CompanyService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: () => {
        this.getConnections();
      }
    })
    this.getConnections();
    // this.deleteConnections();
  }

  getConnections() {
    this.http.get<any[]>('http://localhost:3000/company').subscribe(result => {
      this.companys=result;
      console.log(this.companys);
    });
  }

  deleteConnections(id: number){
    const company = this.companys.find(x => x.id === id);
    console.log(company);
    if(!company) { return; }
    this.companyService.delete(id)
      .pipe(first())
      .subscribe(() => this.companys = this.companys.filter(x => x.id !== id))
  }
}
