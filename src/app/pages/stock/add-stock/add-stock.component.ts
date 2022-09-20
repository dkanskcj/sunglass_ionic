import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { StockDetailPage } from '../stock-detail/stock-detail.page';

type stockDetail = {
  sort: string;
  stock_variance: string;
  reason: string;
  date?: Date;
  cost: number;
}


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss'],
})
export class AddStockComponent implements OnInit {
  @Input() addDetail: stockDetail[];
  constructor(
    private modalController:ModalController,
    ) { }

  createForm = new FormGroup({
    sort: new FormControl(null),
    stock_variance: new FormControl(null),
    reason: new FormControl(null),
    addDate: new FormControl(new Date),
    cost: new FormControl(20000)
  })
  selectedSorting: string = '입고';
  selectedVariance: number;
  selectedReason: string;
  inputDate = new Date()

  sortingActions = [
    {id: 1, value: '입고'},
    {id: 2, value: '출고'},
  ]


  ngOnInit() {
    this.createForm.controls['addDate'].setValue(new Date())
    console.log(this.addDetail)
  }

  handleClose(){
    this.modalController.dismiss();
  }

  testClicked(){   
    const body = this.createForm.getRawValue();
    console.log(body);
    this.modalController.dismiss(body);

    
    // console.log(this.stockDetailService.addDetail(body));
    

  }
}
