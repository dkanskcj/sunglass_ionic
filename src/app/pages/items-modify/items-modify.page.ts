import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModifyModalComponent } from './modify-modal/modify-modal.component';

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
  selector: 'app-items-modify',
  templateUrl: './items-modify.page.html',
  styleUrls: ['./items-modify.page.scss'],
})

export class ItemsModifyPage implements OnInit {
  @ViewChild('fileUploader') fileUploader: ElementRef;
  display: FormControl = new FormControl("", Validators.required);
  isModalOpen = false;
  file_store: FileList;
  file_list: Array<string> = [];
  urls = [];

  option_number: any;


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
  isCustomMade: boolean = false;
  isCustomMade2: boolean = true;
  isTeenager: boolean = false;
  isTeenager2: boolean = true;
  isNoticeProduct: boolean = false;
  isNoticeProduct2: boolean = true;
  isShippingInfo: boolean = false;
  isShippingInfo2: boolean = true;
  isOptionGroup: boolean = true;

  url: any = '';
  option: any;
  image: any;
  payMethod: boolean = false;
  payMethod2: boolean = false;
  payMethod3: boolean = false;
  payMethod4: boolean = false;
  payMethod5: boolean = false;
  selected: number;

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  // imageInfos?: Observable<any>;

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

  toggleCustomMadeSetting() {
    this.isCustomMade = true;
    this.isCustomMade2 = false;
  }

  toggleCustomMadeSetting2() {
    this.isCustomMade = false;
    this.isCustomMade2 = true;
  }

  toggleTeenagerSetting() {
    this.isTeenager = true;
    this.isTeenager2 = false;
  }

  toggleTeenagerSetting2() {
    this.isTeenager = false;
    this.isTeenager2 = true;
  }

  toggleNoticeProductSetting() {
    this.isNoticeProduct = true;
    this.isNoticeProduct2 = false;
  }

  toggleNoticeProductSetting2() {
    this.isNoticeProduct = false;
    this.isNoticeProduct2 = true;
  }

  toggleShippingInfoSetting() {
    this.isShippingInfo = true;
    this.isShippingInfo2 = false;
  }

  toggleShippingInfoSetting2() {
    this.isShippingInfo = false;
    this.isShippingInfo2 = true;
  }

  toggleOptionGroupSetting() {
    this.isOptionGroup = !this.isOptionGroup;
  }



  resetFileUploader() {
    this.fileUploader.nativeElement.value = null;
  }

  checkBoxpayMethod() {
    this.payMethod = true;
    this.payMethod2 = false;
    this.payMethod3 = false;
    this.payMethod4 = false;
    this.payMethod5 = false;
  }
  checkBoxpayMethod2() {
    this.payMethod = false;
    this.payMethod2 = true;
    this.payMethod3 = false;
    this.payMethod4 = false;
    this.payMethod5 = false;
  }
  checkBoxpayMethod3() {
    this.payMethod = false;
    this.payMethod2 = false;
    this.payMethod3 = true;
    this.payMethod4 = false;
    this.payMethod5 = false;
  }
  checkBoxpayMethod4() {
    this.payMethod = false;
    this.payMethod2 = false;
    this.payMethod3 = false;
    this.payMethod4 = true;
    this.payMethod5 = false;
  }
  checkBoxpayMethod5() {
    this.payMethod = false;
    this.payMethod2 = false;
    this.payMethod3 = false;
    this.payMethod4 = false;
    this.payMethod5 = true;
  }




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

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  // 인증 정보 사진
  handleFileInputChange(l: FileList): void {
    this.file_store = l;
    if (l.length) {
      const f = l[0];
      const count = l.length > 1 ? `(+${l.length - 1} files)` : "";
      this.display.patchValue(`${f.name}${count}`);
    } else {
      this.display.patchValue("");
    }
  }
  handleSubmit(): void {
    var fd = new FormData();
    this.file_list = [];
    for (let i = 0; i < this.file_store.length; i++) {
      fd.append("files", this.file_store[i], this.file_store[i].name);
      this.file_list.push(this.file_store[i].name);
      console.log(this.file_list);
    }
  }
  removeSelectedFile(index) {
    this.file_list.splice(index, 1);
  }


  // 추가 이미지
  onSelectFileImage(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.urls.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  remove_Image(image) {
    this.urls.splice(image, 1)
  }


  // 옵션 삭제
  remove_Option(option) {
    this.Options.splice(option, 1)
  }

  
  constructor(
    private modalController: ModalController,
    private route: ActivatedRoute
    ){}
    
    async setOpen() {
      const modal = await this.modalController.create({
        component: ModifyModalComponent,
        cssClass: 'modify_modal'
      })
      modal.present();
    }
      
  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event: any) => { // called once readAsDataURL is completed
  //       console.log(event);
  //       this.url = event.target.result;
  //     }
  //   }
  // }
  

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.id = params['id'];
    // });
  }
  
}
// uploader: FileUploader = new FileUploader({
//   url: 'http://localhost:4200'
// })
// fileInfo = {
//   originalname: '',
//   filename: ''
// }

// constructor() {
//   let uploadUrl = window.location.protocol + "//" + window.location.host + "/modify"
//   this.uploader = new FileUploader({ url: 'http://localhost:4200' })
//   this.uploader.onSuccessItem = (item, response, status, headers) => {

//     this.uploadResult = {
//       "success": true, "item": item, "response":

//         response, "status": status, "headers": headers
//     };

//   };

//   this.uploader.onErrorItem = (item, response, status, headers) => {

//     this.uploadResult = {
//       "success": false, "item": item,

//       "response": response, "status": status, "headers": headers
//     };

//   };

//   this.uploader.onCompleteAll = () => {

//     this.handleUploadComplete();

//   };
// }
// private handleUploadComplete() {

//   console.log("upload compete : " + this.uploadResult.response);

//   if (this.uploadResult.success) {

//   } else {

//   }
// }
//   handleUploadFileChanged(event) {
//     this.uploader.clearQueue();
//     let files: File[] = event.target.files;
//     let filteredFiles: File[] = [];
//     for (var f of files) {
//       if (f.name.endsWith(".svg")) {
//         filteredFiles.push(f);
//       }
//     }
//     if (filteredFiles.length == 0) {
//       this.showGuide = true;
//     } else {
//       this.showGuide = false;
//       let options = null;
//       let filters = null;
//       this.uploader.addToQueue(filteredFiles, options, filters);
//     }
//   }
// imageList: Blob[] = [];

  // onUploadImage(event) {
  //   const repeats = event.length;
  //   for (let i = 0; i < repeats; i++) {
  //     const blob: Blob = event[i];
  //     if (blob.type.includes('image')) return this.imageList.push(blob);

  //     alert('이미지 파일 외에는 지원하지 않습니다.');
  //   }
  // }

  // onDeleteImage(index: number) {
  //   this.imageList.splice(index, 1);
  // }