import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  @Input() label?: any;
  @Input() label2?: any;
  @Input() nextLabel?: any;
  @Input() nextLabel2?: any;
  @Input() nextLabel3?: any;
  @Input() nextLabel4?: any;

  @HostBinding('class') class = 'flex-1';

  constructor() { }

  ngOnInit() {}

}
