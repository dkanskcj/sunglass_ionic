import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModifyModalComponent } from './modify-modal/modify-modal.component';

@Component({
  selector: 'app-items-modify',
  templateUrl: './items-modify.page.html',
  styleUrls: ['./items-modify.page.scss'],
})

export class ItemsModifyPage implements OnInit {
  isModalOpen = false;
  url = '';
  // public uploader: FileUploader;
  // @Input() image: any;
  // percentDone: number;
  // uploadSuccess: boolean;
  // showGuide: boolean;
  // private uploadResult: any = null;
  // uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });

  
  constructor(
    private modalController: ModalController
    ){}
    
    async setOpen() {
      const modal = await this.modalController.create({
        component: ModifyModalComponent,
        cssClass: 'modify_modal'
      })
      modal.present();
    }
      
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        console.log(event);
        this.url = event.target.result;
      }
    }
  }
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

  ngOnInit() {
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
