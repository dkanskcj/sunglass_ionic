import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reason-modal',
  templateUrl: './reason-modal.component.html',
  styleUrls: ['./reason-modal.component.scss'],
})
export class ReasonModalComponent implements OnInit {
  @Input() reason: any;


  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // console.log('배송이 완료되었습니다.')
    console.log(this.reason);
  }

  handleClose(){
    this.modalController.dismiss(console.log(this.reason));
  }


  returnRefuse(){
    return this.modalController.dismiss(this.reason.refundStatus = '반품취소', '1');
  }
}
