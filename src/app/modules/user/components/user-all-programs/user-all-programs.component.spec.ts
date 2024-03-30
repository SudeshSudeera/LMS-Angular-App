import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllProgramsComponent } from './user-all-programs.component';

describe('UserAllProgramsComponent', () => {
  let component: UserAllProgramsComponent;
  let fixture: ComponentFixture<UserAllProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAllProgramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAllProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
