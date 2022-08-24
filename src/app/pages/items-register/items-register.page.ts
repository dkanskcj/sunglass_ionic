import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

type Option = {
  value: string;
  addCost: string;
  stock: string;
  icon?: string;
}

type Option_Group = {
  case: string;
  value: string;
  addCost: string;
  stock: string;
  icon: string;
}

type Image = {
  url?: string;
  button?: string;
}

@Component({
  selector: 'app-items-register',
  templateUrl: './items-register.page.html',
  styleUrls: ['./items-register.page.scss'],
})
export class ItemsRegisterPage implements OnInit {
  @ViewChild('fileUploader') fileUploader: ElementRef;

  isOptionType: boolean = false;
  isOptionType2: boolean = true;
  isSetting: boolean = false;
  isSetting2: boolean = true;
  isDiscount: boolean = false;
  isDiscount2: boolean = true;
  isDiscountDate: boolean = false;
  isDiscountDate2: boolean = true;
  isBrandInput: boolean = false;
  isBrandInput2: boolean = true;
  isMultiple: boolean = false;
  isMultiple2: boolean = true;
  isCertification: boolean = false;
  isCertification2: boolean = true;
  payMethod: boolean = false;
  selected: number;

  Options: Option[] = [
    {
      value: '나무케이스',
      addCost: '10,000',
      stock: '0',
      icon: "assets/icons/minus.svg"
    },
    {
      value: '플라스틱케이스',
      addCost: '20,000',
      stock: '0',
      icon: "assets/icons/minus.svg"
    },
    {
      value: '메탈케이스',
      addCost: '30,000',
      stock: '0',
      icon: "assets/icons/plus.svg"
    }
  ]
  Option_Groups: Option_Group[] = [
    {
      case: '나무케이스',
      value: '블랙',
      addCost: '0',
      stock: '9,999',
      icon: 'assets/icons/minus.svg'
    },
    {
      case: '나무케이스',
      value: '레드',
      addCost: '0',
      stock: '9,999',
      icon: 'assets/icons/minus.svg'
    },
    {
      case: '플라스틱케이스',
      value: '레드',
      addCost: '0',
      stock: '9,999',
      icon: 'assets/icons/minus.svg'
    },
    {
      case: '플라스틱케이스',
      value: '블루',
      addCost: '0',
      stock: '9,999',
      icon: 'assets/icons/minus.svg'
    },
    {
      case: '플라스틱케이스',
      value: '그린',
      addCost: '0',
      stock: '9,999',
      icon: 'assets/icons/minus.svg'
    },
    {
      case: '나무케이스',
      value: '실버',
      addCost: '0',
      stock: '0',
      icon: 'assets/icons/minus.svg'
    },
    {
      case: '나무케이스',
      value: '골드',
      addCost: '0',
      stock: '10',
      icon: 'assets/icons/plus.svg'
    },
  ]

  Images: Image[] = [
    {
      url: 'assets/icons/add_img.svg'
    },
    {
      url: 'assets/icons/add_img.svg'
    },
    {
      url: 'assets/icons/add_img.svg'
    }
  ]

  selectedOption = 0;
  actions = [
    { id: 0, name: '개수 선택' },
    // { id: 1, name: '0개' },
    { id: 1, name: '1개' },
    { id: 2, name: '2개' },
    { id: 3, name: '3개' },
    { id: 4, name: '4개' },
    { id: 5, name: '5개' },
  ]

  // option_change(event: any): void{
  //   console.log(event.target.innerText);
  //   this.isClick = event.target.innerText;
  // }

  toggleOptionSetting() {
    this.isSetting = true;
    this.isSetting2 = false;
  }
  toggleOptionSetting2() {
    this.isSetting2 = true;
    this.isSetting = false;
  }

  toggleOptionTypeSetting() {
    this.isOptionType = true;
    this.isOptionType2 = false;
  }
  toggleOptionTypeSetting2() {
    this.isOptionType = false;
    this.isOptionType2 = true;
  }

  toggleDiscountSetting() {
    this.isDiscount = true;
    this.isDiscount2 = false;
  }
  toggleDiscountSetting2() {
    this.isDiscount = false;
    this.isDiscount2 = true;
  }

  toggleDiscountDateSetting() {
    this.isDiscountDate = true;
    this.isDiscountDate2 = false;
  }
  toggleDiscountDateSetting2() {
    this.isDiscountDate = false;
    this.isDiscountDate2 = true;
  }

  toggleBrandInputSetting() {
    this.isBrandInput = true;
    this.isBrandInput2 = false;
  }
  toggleBrandInputSetting2() {
    this.isBrandInput = false;
    this.isBrandInput2 = true;
  }

  toggleMultipleSetting() {
    this.isMultiple = true;
    this.isMultiple2 = false;
  }
  toggleMultipleSetting2() {
    this.isMultiple = false;
    this.isMultiple2 = true;
  }

  toggleCertificationSetting() {
    this.isCertification = true;
    this.isCertification2 = false;
  }
  toggleCertificationSetting2() {
    this.isCertification = false;
    this.isCertification2 = true;
  }

  resetFileUploader() {
    this.fileUploader.nativeElement.value = null;
  }

  checkBoxpayMethod() {
    this.payMethod = !this.payMethod;
  }

  url: any = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      // reader.readAsDataURL(event.target.files[0]); // read file as data url
      // reader.
      // reader.readAsBinaryString(event.target.files[0]);
      reader.readAsDataURL(event.target.files[0]);
      // reader.readAsText(event.target.files[0]);
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
