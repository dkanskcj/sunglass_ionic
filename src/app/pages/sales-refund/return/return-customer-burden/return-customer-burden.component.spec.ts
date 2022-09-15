import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnCustomerBurdenComponent } from './return-customer-burden.component';

describe('ReturnCustomerBurdenComponent', () => {
  let component: ReturnCustomerBurdenComponent;
  let fixture: ComponentFixture<ReturnCustomerBurdenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnCustomerBurdenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnCustomerBurdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
