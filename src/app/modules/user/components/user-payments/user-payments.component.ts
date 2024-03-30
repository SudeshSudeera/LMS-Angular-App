import { Component } from '@angular/core';
import { ProgramWidgetComponent } from "../widget/program-widget/program-widget.component";
import { ProgramsService } from '../../../../services/program/programs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-payments',
  standalone: true,
    imports: [
        ProgramWidgetComponent, CommonModule
    ],
  templateUrl: './user-payments.component.html',
  styleUrl: './user-payments.component.scss'
})

export class UserPaymentsComponent {
  
  dataArr: any[] = [];

  constructor(private programService: ProgramsService){}

  ngOnInit(): void {
    this.loadAllPayments();
  }

  private loadAllPayments() {
    this.programService.loadMyPayments().subscribe(response => {
      this.dataArr = response.data;
    })
  }
}
