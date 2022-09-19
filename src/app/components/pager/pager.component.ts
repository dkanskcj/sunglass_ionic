import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pagination } from 'src/service/pagination.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {
  @Input() allItems: any[];
  @Input() pager: any = {};
  @Input() pagedItems: any[];
  @Output() isToggle = new EventEmitter<any>();
  
  
  
  constructor(
    private http: HttpClient,
    private paginationService: pagination
  ) { }
  
  ngOnInit() {
  }

  setPage(page: number) {
    this.pager = this.paginationService.getPager(this.allItems.length, page, 10);

    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}