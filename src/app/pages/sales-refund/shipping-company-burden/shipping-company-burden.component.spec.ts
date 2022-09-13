import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShippingCompanyBurdenComponent } from './shipping-company-burden.component';

describe('ShippingCompanyBurdenComponent', () => {
  let component: ShippingCompanyBurdenComponent;
  let fixture: ComponentFixture<ShippingCompanyBurdenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingCompanyBurdenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShippingCompanyBurdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
