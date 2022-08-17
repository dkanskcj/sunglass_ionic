import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.scss'],
})
export class ModifyModalComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  handleClose () {
    this.modalController.dismiss()
  }

}
