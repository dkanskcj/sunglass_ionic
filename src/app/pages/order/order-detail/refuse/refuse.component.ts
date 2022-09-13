import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-refuse',
  templateUrl: './refuse.component.html',
  styleUrls: ['./refuse.component.scss'],
})
export class RefuseComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}


  handleClose(){
    return this.modalController.dismiss();
  }
}
