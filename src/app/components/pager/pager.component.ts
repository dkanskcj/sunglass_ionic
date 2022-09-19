import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pagination } from 'src/service/pagination.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {

  @Output() clickedPage: EventEmitter<number> = new EventEmitter<number>();
  @Input() allItems: any[];
  pager: any = {};
  @Input() pagedItems: any[];
  @Input() count: number;
  @Input() selectedOption: number = 10;
  
  
  constructor(
    private http: HttpClient,
    private paginationService: pagination
  ) { }
  
  ngOnInit() {
    this.pager = this.paginationService.getPager(this.allItems.length, 1, this.selectedOption);
    console.log(this.count)
  }

  setPage(page: number) {
    this.pager = this.paginationService.getPager(this.count, page, this.selectedOption);
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.clickedPage.emit(page);
  }
}