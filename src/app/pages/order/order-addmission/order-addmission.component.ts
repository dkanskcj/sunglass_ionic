import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IOrder } from 'src/app/service/order/order-interface';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-order-addmission',
  templateUrl: './order-addmission.component.html',
  styleUrls: ['./order-addmission.component.scss'],
})
export class OrderAddmissionComponent implements OnInit {
  @Input() status: IOrder[];

  changeStatus: string = '주문승인';
  // index: IOrder[] = [];
  constructor(
    private modalController: ModalController,
    private orderService: OrderService,
  ) { }

  ngOnInit() {
    console.log(this.status);
    // console.log(this.status.slice())
  }

  classChange(){
    if(this.isLoading = true){
      return 'text-green-500 border border-green-400 items-end rounded-md'
    }
    else{
      return 'text-red-500 border border-red-400 items-end rounded-md'
    }
  }


  handleClose(){  
    return this.modalController.dismiss(null, 'closeModal');
  }
  isLoading: boolean = true;
  changeOrderStatus(){
    this.isLoading = false;
    this.orderService.updateStatus(this.status).subscribe(res=>{
      if(res){
        this.modalController.dismiss()
      }
    });
  }
}
