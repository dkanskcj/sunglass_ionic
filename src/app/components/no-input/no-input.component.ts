import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './no-input.component.html',
  styleUrls: ['./no-input.component.scss'],
})
export class NoInputComponent implements OnInit {
  @Input() title:string;
  @Input() content: any;
  @Input() reason: any;

  constructor() { }

  ngOnInit() {}

}
