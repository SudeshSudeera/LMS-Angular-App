import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramWidgetComponent } from './program-widget.component';

describe('ProgramWidgetComponent', () => {
  let component: ProgramWidgetComponent;
  let fixture: ComponentFixture<ProgramWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
