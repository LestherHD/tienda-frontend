import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductosComponent } from './dashboard-productos.component';

describe('DashboardProductosComponent', () => {
  let component: DashboardProductosComponent;
  let fixture: ComponentFixture<DashboardProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
