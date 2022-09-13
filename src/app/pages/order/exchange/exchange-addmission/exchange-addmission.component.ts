import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exchange-addmission',
  templateUrl: './exchange-addmission.component.html',
  styleUrls: ['./exchange-addmission.component.scss'],
})
export class ExchangeAddmissionComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }


  handleClose() {
    return this.modalController.dismiss();
  }
}
