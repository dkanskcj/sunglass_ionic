import { Component, OnInit } from '@angular/core';

type Option = {
  value: string;
  addCost: string;
  stock: string;
  icon?: string;
}
type Image ={
  url?: string;
  button?: string; 
}

@Component({
  selector: 'app-items-register',
  templateUrl: './items-register.page.html',
  styleUrls: ['./items-register.page.scss'],
})
export class ItemsRegisterPage implements OnInit {

  Options : Option[] =[
    {
      value: '블랙',
      addCost: '10,000',
      stock: '9,999',
      icon: "assets/icons/minus.svg"
    },
    {
      value: '레드',
      addCost: '20,000',
      stock: '9,999',
      icon: "assets/icons/minus.svg"
    },
    {
      value: '옐로우',
      addCost: '30,000',
      stock: '9,999',
      icon: "assets/icons/plus.svg"
    }
  ]

  Images : Image[] =[
    {
      url: 'assets/icons/add_img.svg'
    },
    {
      url: 'assets/icons/add_img.svg'
    },
    {
      url: 'assets/icons/add_img.svg'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
