import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-order-addmission',
  templateUrl: './order-addmission.component.html',
  styleUrls: ['./order-addmission.component.scss'],
})
export class OrderAddmissionComponent implements OnInit {
  @Input() status: any = [];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.status);
  }



  handleClose(){  
    return this.modalController.dismiss();
  }

  changeOrderStatus(){
    if(this.status.orderStatus !== '주문승인')
    {
      this.status.orderStatus = '주문승인';
    }
    // console.log(this.status.orderStatus = '주문승인')
  }
}
