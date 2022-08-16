import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-modify',
  templateUrl: './items-modify.page.html',
  styleUrls: ['./items-modify.page.scss'],
})
export class ItemsModifyPage implements OnInit {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
      return this.isModalOpen = isOpen;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
