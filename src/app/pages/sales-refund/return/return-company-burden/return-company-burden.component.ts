import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

type shippingInput = {
  name: string;
  value: string;
  reason?: string;
}


@Component({
  selector: 'app-return-company-burden',
  templateUrl: './return-company-burden.component.html',
  styleUrls: ['./return-company-burden.component.scss'],
})
export class ReturnCompanyBurdenComponent implements OnInit {
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
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.salesRefund)
  }

  handleClose() {
    this.modalController.dismiss();
  }

  handleReturnComplete() {
    console.log(this.inputs)
    return this.modalController.dismiss(
      this.salesRefund.refundStatus = '반품완료'
      );
  }
}
