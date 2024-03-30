import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllProgramsComponent } from './admin-all-programs.component';

describe('AdminAllProgramsComponent', () => {
  let component: AdminAllProgramsComponent;
  let fixture: ComponentFixture<AdminAllProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAllProgramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAllProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
