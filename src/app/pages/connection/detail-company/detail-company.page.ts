import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/service/company/company.service';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.page.html',
  styleUrls: ['./detail-company.page.scss'],
})
export class DetailCompanyPage implements OnInit {

  companyId: number;

  company: any;
  testcompany = [];
  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    // this.companyId = this.route.snapshot.params['id'];
    console.log(this.route.snapshot);
    if (this.companyId) {
     this.getCompany();
    //  console.log("snapshot : "+this.route.snapshot.params)
    }
  }

  getCompany() {
    this.companyService.getCompany(this.company).subscribe({
      next: (res) => {
        this.company = res;
      },
      error: (error) => {
        console.log(error.error.message)
      }
    })
  }


}
