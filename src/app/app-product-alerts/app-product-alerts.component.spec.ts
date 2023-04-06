import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductAlertsComponent } from './app-product-alerts.component';

describe('AppProductAlertsComponent', () => {
  let component: AppProductAlertsComponent;
  let fixture: ComponentFixture<AppProductAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppProductAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProductAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
