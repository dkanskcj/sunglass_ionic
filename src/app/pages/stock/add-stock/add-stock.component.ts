import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss'],
})
export class AddStockComponent implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {}

  handleClose(){
    this.modalController.dismiss();
  }
}
