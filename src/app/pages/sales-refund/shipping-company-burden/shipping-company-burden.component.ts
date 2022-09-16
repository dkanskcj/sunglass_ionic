import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReasonModalComponent } from './reason-modal/reason-modal.component';

type shippingInput = {
  name: string;
  value: string;
  reason?: string;
}

type refundTitle = {
  product: string;
  reason?: string;
}


@Component({
  selector: 'app-shipping-company-burden',
  templateUrl: './shipping-company-burden.component.html',
  styleUrls: ['./shipping-company-burden.component.scss'],
})
export class ShippingCompanyBurdenComponent implements OnInit {
  @Input() salesRefund: any;
  test = '반품중';

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

  refunds: refundTitle[] = [
    {
      product: '상품 명 : 티쓰-001 블랙 썬글라스'
    },
    {
      product: '수량 : 2',
    },
    {
      product: '반품자명 : 윤대현',
    },
    {
      product: '연락처 : 010-1234-5678',
    },
    {
      product: '입금자명 : 윤대현',
    },
    {
      product: '계좌정보 : 기업 098-880-111-1111',
    },
    {
      product: '주소 : 광주 북구 용봉동 850',
    },
    {
      product: '사유 : 제품 불량이요~',
      reason: '제품하자'
    },
    {
      product: '환불액 : 20000'
    },
  ]
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.salesRefund);
  }

  handleApprove() {
    // console.log('test');
    return this.modalController.dismiss(this.salesRefund.refundStatus = '반품중');
  }

  handleClose() {
    this.modalController.dismiss(null ,null, 'refundPending');
  }

  testTest() {
    if (this.salesRefund.refundStatus === '반품중') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-yellow-50 border-yellow-200 text-yellow-500'
    }
    if (this.salesRefund.refundStatus === '반품대기중') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-gray-50 border-gray-200 text-gray-500'
    }
    if (this.salesRefund.refundStatus === '반품취소') {
      return 'w-fit h-fit px-2 py-1 border box-border rounded-md bg-red-50 border-red-200 text-red-500'
    }
  }


  async modalOpen() {
    const modal = await this.modalController.create({
      component: ReasonModalComponent,
      cssClass: 'refundReason',
      componentProps: {
        reason: this.salesRefund
      }
    })
    // console.log('----포장 준비중----')
    // console.log('-------------------')
    // console.log('|\\               /|')
    // console.log('| \\             / |')
    // console.log('|  \\           /  |')
    // console.log('|   \\         /   |')
    // console.log('|    \\       /    |')
    // console.log('|     \\     /     |')
    // console.log('|      \\   /      |')
    // console.log('|       \\ /       |')
    // console.log('|        X        |')
    // console.log('|       / \\       |')
    // console.log('|      /   \\      |')
    // console.log('|     /     \\     |')
    // console.log('|    /       \\    |')
    // console.log('|   /         \\   |')
    // console.log('|  /           \\  |')
    // console.log('| /             \\ |')
    // console.log('|/               \\|')
    // console.log('-------------------')
    // console.log('----  포장 끝  ----')

    modal.present();

    modal.onWillDismiss().then(res => {
      if (res.role === '1') {
        this.handleClose()
      }
    })
  }
}
