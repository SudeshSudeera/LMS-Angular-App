import { Component } from '@angular/core';
import { CommonModule, DatePipe } from "@angular/common";
import { ProgramWidgetComponent } from "../widget/program-widget/program-widget.component";
import { ProgramsService } from '../../../../services/program/programs.service';

@Component({
  selector: 'app-user-my-programs',
  standalone: true,
  imports: [DatePipe, ProgramWidgetComponent, CommonModule],
  templateUrl: './user-my-programs.component.html',
  styleUrl: './user-my-programs.component.scss'
})

export class UserMyProgramsComponent {

  dataArr: any[] = [];

  constructor(private programService: ProgramsService){}

  ngOnInit(): void {
    this.loadAllMyPrograms();
  }

  private loadAllMyPrograms() {
    this.programService.loadMyPrograms().subscribe(response => {
      this.dataArr = response.data;
    })
  }
}
