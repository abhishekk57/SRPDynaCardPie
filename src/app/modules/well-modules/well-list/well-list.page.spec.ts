import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WellListPage } from './well-list.page';

describe('WellListPage', () => {
  let component: WellListPage;
  let fixture: ComponentFixture<WellListPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(WellListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
