import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
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
  searchText: any;
  company=[];
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
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.router.events.pipe(filter(ev => ev instanceof NavigationEnd)).subscribe({
      next: () => {
        this.getConnections();
      }
    })
    this.getConnections();
  }

  getConnections() {
    this.http.get<any[]>('http://localhost:3000/company').subscribe(result => {
      console.log(result);
      this.company=result;
    });
  }
  
}
