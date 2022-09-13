import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-addmission',
  templateUrl: './order-addmission.component.html',
  styleUrls: ['./order-addmission.component.scss'],
})
export class OrderAddmissionComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}



  handleClose(){
    return this.modalController.dismiss();
  }
}
