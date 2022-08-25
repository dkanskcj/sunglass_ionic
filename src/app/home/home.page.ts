import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  // @Input() images: string[];

  slideIndex: number = 0;

  plusSlides(n: number) {
    // this.slideIndex += n;
    if(this.slideIndex > this.images.length-2){
      this.slideIndex = 0;
    }
    else{
      this.slideIndex += n;
    }
  }

  images = [
    'assets/icons/personal_trainer.jfif',
    'assets/icons/personal_trainer3.jfif',
    'assets/icons/personal_trainer2.jfif',
    'assets/icons/trainer1.jfif',
  ];
  // @Input() images: Array<string>;
  // @Output() change: EventEmitter<number> = new EventEmitter<number>();
  // counter = 0;

  // ngAfterContentInit() {
  //   this.change.emit(0);
  // }

  // onClickThumb(event) {
  //   const total = this.images.length - 1;
  //   this.counter = event.layerX < 150 ? this.dec(total) : this.inc(total);
  //   this.change.emit(this.counter);
  // }

  // onNext() {
  //   const total = this.images.length - 1;
  //   this.counter = this.inc(total);
  //   this.change.emit(this.counter);
  // }
  // onPrevious() {
  //   const total = this.images.length - 1;
  //   this.counter = this.dec(total);
  //   this.change.emit(this.counter);
  // }

  // inc(total) {
  //   return (this.counter < total) ? this.counter + 1 : 0;
  // }

  // dec(total) {
  //   return (this.counter > 0) ? this.counter - 1 : total;
  // }
  // @Input() slideItems: Array<any>;
  // counter = 0;
  // showNextImage() {
  //   if (this.counter < this.slideItems.length -1) {
  //     this.counter += 1;
  //   }
  // }

  // showPreviousImage() {
  //   if (this.counter >= 1) {
  //     this.counter = this.counter - 1;
  //   }
  // }
  // index;

  // images = [
  //   'https://placeimg.com/300/300/nature/6',
  //   'https://placeimg.com/300/300/nature/7',
  //   'https://placeimg.com/300/300/nature/8',
  //   'https://placeimg.com/300/300/nature/9',
  //   'https://placeimg.com/300/300/nature/2',
  //   'https://placeimg.com/300/300/nature/3',
  //   'https://placeimg.com/300/300/nature/1',
  // ];

  // // slideItems = [
  // //   { src: 'https://placeimg.com/600/600/any', title: 'Title 1' },
  // //   { src: 'https://placeimg.com/600/600/nature', title: 'Title 2' },
  // //   { src: 'https://placeimg.com/600/600/sepia', title: 'Title 3' },
  // //   { src: 'https://placeimg.com/600/600/people', title: 'Title 4' },
  // //   { src: 'https://placeimg.com/600/600/tech', title: 'Title 5' }
  // // ];

  // onChange(idx) {
  //   console.log(idx);
  //   this.index = idx;
  // }

  constructor() { }

}
