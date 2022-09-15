import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnCompanyBurdenComponent } from './return-company-burden.component';

describe('ReturnCompanyBurdenComponent', () => {
  let component: ReturnCompanyBurdenComponent;
  let fixture: ComponentFixture<ReturnCompanyBurdenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnCompanyBurdenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnCompanyBurdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
