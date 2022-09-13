import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exchange-all-checked',
  templateUrl: './exchange-all-checked.component.html',
  styleUrls: ['./exchange-all-checked.component.scss'],
})
export class ExchangeAllCheckedComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}


  handleClose(){
    return this.modalController.dismiss();
  }
}
