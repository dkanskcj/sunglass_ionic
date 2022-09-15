import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reason-modal',
  templateUrl: './reason-modal.component.html',
  styleUrls: ['./reason-modal.component.scss'],
})
export class ReasonModalComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}


  handleClose(){
    this.modalController.dismiss();
  }

}
