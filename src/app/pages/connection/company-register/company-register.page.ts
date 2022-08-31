import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CompanyService } from 'src/app/service/company/company.service';
import { ConnectionPage } from '../connection.page';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.page.html',
  styleUrls: ['./company-register.page.scss'],
})
export class CompanyRegisterPage implements OnInit {

  createForm = new FormGroup({
    name: new FormControl(null),
    tel: new FormControl(null),
    owner: new FormControl(null),
    companyNumber: new FormControl(null),
    address: new FormControl(null)
  })

  // verifyForm = new FormGroup({
  // })
  company = [];
  constructor(
    private http: HttpClient,
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  // checkVerify() {
  //   this.http.get<any[]>('http://localhost:3000/company').subscribe(result => {
  //     const verify = this.verifyForm.getRawValue();
  //     console.log("checkVerify() => "+ result);
  //     if(verify)
  //     this.company = result;
  //   });
  //   console.log("test Company" + this.company)
  // }


  submit() {
    const body = this.createForm.getRawValue();
    console.log(body)
    this.companyService.create(body).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/company')
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
