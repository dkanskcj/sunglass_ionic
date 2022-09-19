import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


type shippingInput = {
  name: string;
  value: string;
  reason?: string;
}

@Component({
  selector: 'app-return-customer-burden',
  templateUrl: './return-customer-burden.component.html',
  styleUrls: ['./return-customer-burden.component.scss'],
})
export class ReturnCustomerBurdenComponent implements OnInit {
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
  ]

  refundComplete = new Date()

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.salesRefund)
  }
  handleClose(){
    this.modalController.dismiss();
  }

  handleReturnComplete(){
    return this.modalController.dismiss((
      this.salesRefund.refundStatus = '반품완료',
      this.salesRefund.refundComplete = this.refundComplete
      ));
  }
}
