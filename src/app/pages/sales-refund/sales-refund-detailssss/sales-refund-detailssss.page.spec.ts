import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesRefundDetailssssPage } from './sales-refund-detailssss.page';

describe('SalesRefundDetailssssPage', () => {
  let component: SalesRefundDetailssssPage;
  let fixture: ComponentFixture<SalesRefundDetailssssPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRefundDetailssssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesRefundDetailssssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
