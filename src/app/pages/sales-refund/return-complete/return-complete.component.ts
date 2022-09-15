import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SalesRefundPageModule } from '../sales-refund.module';
import { SalesRefundPage } from '../sales-refund.page';

@Component({
  selector: 'app-return-complete',
  templateUrl: './return-complete.component.html',
  styleUrls: ['./return-complete.component.scss'],
})
export class ReturnCompleteComponent implements OnInit {
  test: any;
  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  handleClose(){
    this.modalController.dismiss();
  }
  // getStock(id: number) {
  //   this.salesRefund.handleModalOpen(id).subscribe({
  //     next: (res) => {
  //       console.log(res)
  //       this.stock = res;
  //     },
  //     error: (error) => {
  //       console.log(error)
  //     }
  //   })
  // }



}
