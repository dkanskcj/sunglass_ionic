import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { postcode } from 'src/assets/js/postcode.js';
type Option = {
  value: string;
  addCost: string;
  stock: string;
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
type segmentBtn = {
  name: string;
  value: string;
}

@Component({
  selector: 'app-items-register',
  templateUrl: './items-register.page.html',
  styleUrls: ['./items-register.page.scss'],
})
export class ItemsRegisterPage implements OnInit {
  @ViewChild('fileUploader') fileUploader: ElementRef;
  @ViewChild('daum_popup', { read: ElementRef, static: true }) popup: ElementRef;
  products=[];

  constructor(
    private formbuilder: FormBuilder,
    private renderer: Renderer2,
    private router:Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  createForm = new FormGroup({
    // id: new FormControl(null),
    // thumbnailMain: new FormControl(null),
    // thumbnailSub: new FormControl(null),
    name: new FormControl(null),
    cost: new FormControl(null),
    discount: new FormControl(null),
    discountStartDate: new FormControl(null),
    discountEndDate: new FormControl(null),
    amount: new FormControl(null),
    // optionName: new FormControl(null),
    // optionValues: new FormControl(null),
    // optionList: new FormControl(null),
    description: new FormControl(null),
    modelName: new FormControl(null),
    brandName: new FormControl(null),
    isKC: new FormControl(null),
    origin: new FormControl(null),
    // madeStartDate: new FormControl(null),
    // validEndDate: new FormControl(null),
    isTeenager: new FormControl(null),
    isShowDetail: new FormControl(null),
    courier: new FormControl(null),
    refundDeliveryFee: new FormControl(null),
    changeDeliveryFee: new FormControl(null),
    address: new FormControl(null),
    addressDetail: new FormControl(null),
    tel: new FormControl(null),
    // referenceDate: new FormControl(null),
    cancelReason: new FormControl(null),
    remark: new FormControl(null),
  })

  display: FormControl = new FormControl("", Validators.required);
  file_store: FileList;
  file_list: Array<string> = [];
  urls = [];
  frm = new FormGroup({
    addr1:new FormControl(null),
    addr2:new FormControl(null),
  });
  option_number: any;

  category: string = 'multiple';
  settings: string = 'Setting';
  optiontype: string = 'multiple';

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
  isTeenager1: boolean = false;
  isTeenager2: boolean = true;
  isNoticeProduct: boolean = false;
  isNoticeProduct2: boolean = true;
  isShippingInfo: boolean = false;
  isShippingInfo2: boolean = true;
  isOptionGroup: boolean = true;
  istoggle: boolean = false;
  // isSettings: boolean = false;

  option: any;
  image: any;
  payMethod: boolean = false;
  payMethod2: boolean = false;
  payMethod3: boolean = false;
  payMethod4: boolean = false;
  payMethod5: boolean = false;
  ShippingArea: boolean = false;
  ShippingArea2: boolean = false;
  selected: number;

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  selectedOption = 0;

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  // imageInfos?: Observable<any>;

  categoryList: segmentBtn[] = [
    {
      name: '다중',
      value: 'multiple',
    },
    {
      name: '단일',
      value: 'single',
    }
  ]
  settingList: segmentBtn[] = [
    {
      name: '설정안함',
      value: 'noSetting'
    },
    {
      name: '설정함',
      value: 'Setting'
    }
  ]
  optionytypeList: segmentBtn[] = [
    {
      name: '단독형',
      value: 'single'
    },
    {
      name: '조합형',
      value: 'multiple'
    }
  ]
  // test_tog

  Options: Option[] = [
    {
      value: '케이스명',
      addCost: '',
      stock: '',
    },
    {
      value: '나무케이스',
      addCost: '10,000',
      stock: '0',
    },
    {
      value: '플라스틱케이스',
      addCost: '20,000',
      stock: '0',
    },
    {
      value: '메탈케이스',
      addCost: '30,000',
      stock: '0',
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
    this.isTeenager1 = true;
    this.isTeenager2 = false;
  }

  toggleTeenagerSetting2() {
    this.isTeenager1 = false;
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

  checkBoxShippingArea() {
    this.ShippingArea = true;
    this.ShippingArea2 = false;
  }
  checkBoxShippingArea2() {
    this.ShippingArea = false;
    this.ShippingArea2 = true;
  }

  handleCategory(category: string) {
    this.category = category
  }

  handleSettings(settings: string) {
    this.settings = settings
  }

  handleOptionType(optiontype: string) {
    this.optiontype = optiontype;
  }

  url: any = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
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
  removeImage(image) {
    this.urls.splice(image, 1)
  }


  // 옵션 삭제
  removeOption(option) {
    this.Options.splice(option, 1)
    // }
    console.log(this.Options[0]);
  }

  addOption(option) {
    this.Options.push({
      value: '',
      addCost: null,
      stock: null,
    });
    console.log(this.Options[1]);
  }


  getConnections(){
    this.http.get<any[]>('http://localhost:3000/product').subscribe(res => {
      this.products = res;
      console.log(this.products);
    })
  }
  submit(){
    const body = this.createForm.getRawValue();
    console.log(body);
  }


  openDaumPopup() {
    postcode(this.renderer, this.popup.nativeElement, data => {
      this.createForm.controls.address.setValue(data.address);
      console.log(data);
      /*
          {
              address: "대전 서구 둔산로 100"
              addressEnglish: "100, Dunsan-ro, Seo-gu, Daejeon, Korea"
              addressType: "R"
              apartment: "N"
              autoJibunAddress: ""
              autoJibunAddressEnglish: ""
              autoRoadAddress: ""
              autoRoadAddressEnglish: ""
              bcode: "3017011200"
              bname: "둔산동"
              bname1: ""
              bname2: "둔산동"
              buildingCode: "3017011200114200000021946"
              buildingName: "대전광역시청"
              hname: ""
              jibunAddress: "대전 서구 둔산동 1420"
              jibunAddressEnglish: "1420, Dunsan-dong, Seo-gu, Daejeon, Korea"
              noSelected: "N"
              postcode: "302-789"
              postcode1: "302"
              postcode2: "789"
              postcodeSeq: "007"
              query: "대전시청"
              roadAddress: "대전 서구 둔산로 100"
              roadAddressEnglish: "100, Dunsan-ro, Seo-gu, Daejeon, Korea"
              roadname: "둔산로"
              roadnameCode: "3166019"
              sido: "대전"
              sigungu: "서구"
              sigunguCode: "30170"
              userLanguageType: "K"
              userSelectedType: "R"
              zonecode: "35242"
          }
      */
    });
  }
  closeDaumPopup() {
    this.renderer.setStyle(this.popup.nativeElement, 'display', 'none');
  }



}
