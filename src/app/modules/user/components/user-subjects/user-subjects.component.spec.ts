import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubjectsComponent } from './user-subjects.component';

describe('UserSubjectsComponent', () => {
  let component: UserSubjectsComponent;
  let fixture: ComponentFixture<UserSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
