import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerAdminPage } from './customer-admin.page';

describe('CustomerAdminPage', () => {
  let component: CustomerAdminPage;
  let fixture: ComponentFixture<CustomerAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomerAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
