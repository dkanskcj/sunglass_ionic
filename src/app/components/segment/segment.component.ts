import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

type isCategory = {
  name: string;
  value: string;
}

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {
  @Input() toggleBtn: isCategory[];
  @Input() currentValue: string;
  @Output() isToggle = new EventEmitter<any>();
  toggleEdit: boolean = false;

  constructor() { }

  ngOnInit() { }

  selected(value: string) {
    this.isToggle.emit(value);
  }

}
