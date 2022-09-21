import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-refuse',
  templateUrl: './refuse.component.html',
  styleUrls: ['./refuse.component.scss'],
})
export class RefuseComponent implements OnInit {
  @Input() status: any;
  orderStatus: string = '주문거절';
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.status);
  }


  handleClose(){
    return this.modalController.dismiss();
  }

  sendData(){
    if(this.status === '주문취소'){
      return this.modalController.dismiss();
    }
    this.status = this.orderStatus;
    console.log('sendData() => ',this.status)
    return this.modalController.dismiss(this.status, null, 'REJECT');
  }
}
