import { Component, OnInit } from '@angular/core';
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
      product: '사유 : 부모님한테 걸렸어요 ㅠㅠ',
      reason: '제품하자'
    },
    {
      product: '환불액 : 20000'
    },      // children:[
      //   {
      //     product: '상품명',
      //     amount: '수량',
      //     refundName: '반품자명',
      //     phoneNumber: '연락처',
      //     accountName: '입금자명',
      //     accountInfo: '계좌정보',
      //     address: '주소',
      //     reason: '사유',
      //     refundCost: '환불액',
      //   }
      // ]
  ]
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  handleClose(){
    this.modalController.dismiss();
  }

  async modalOpen(){
    const modal = await this.modalController.create({
      component: ReasonModalComponent,
      cssClass: 'refundReason',
    })
    modal.present();
  }
}
