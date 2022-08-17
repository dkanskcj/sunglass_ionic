import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register-stock',
  templateUrl: './register-stock.component.html',
  styleUrls: ['./register-stock.component.scss'],
})
export class RegisterStockComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  handleClose () {
    this.modalController.dismiss()
  }

}
