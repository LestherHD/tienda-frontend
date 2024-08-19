import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConozcamonosComponent } from './conozcamonos.component';

describe('ConozcamonosComponent', () => {
  let component: ConozcamonosComponent;
  let fixture: ComponentFixture<ConozcamonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConozcamonosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConozcamonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
