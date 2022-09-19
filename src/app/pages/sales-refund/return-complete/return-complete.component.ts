import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SalesRefundPageModule } from '../sales-refund.module';
import { SalesRefundPage } from '../sales-refund.page';

type shippingInput = {
  name: string;
  value: string;
  reason?: string;
}

@Component({
  selector: 'app-return-complete',
  templateUrl: './return-complete.component.html',
  styleUrls: ['./return-complete.component.scss'],
})
export class ReturnCompleteComponent implements OnInit {
  @Input() salesRefund: any;
  inputs: shippingInput[] = [
    {
      name: '택배사',
      value: '한진 택배'
    },
    {
      name: '담당기사',
      value: '최강훈'
    },
    {
      name: '연락처',
      value: '010-1234-5678'
    },
    {
      name: '반품비',
      value: '3,000원',
      reason: '제품하자'
    }
  ]

  refundReturnComplete = new Date()

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log(this.salesRefund)
  }

  handleClose(){
    this.modalController.dismiss();
  }




}
