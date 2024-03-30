import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContextComponent } from './admin-context.component';

describe('AdminContextComponent', () => {
  let component: AdminContextComponent;
  let fixture: ComponentFixture<AdminContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
