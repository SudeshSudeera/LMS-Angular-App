import { Component, OnInit } from '@angular/core';
import { ProgramWidgetComponent } from "../widget/program-widget/program-widget.component";
import { ProgramsService } from '../../../../services/program/programs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-all-programs',
  standalone: true,
    imports: [
        ProgramWidgetComponent, CommonModule
    ],
  templateUrl: './user-all-programs.component.html',
  styleUrl: './user-all-programs.component.scss'
})

export class UserAllProgramsComponent implements OnInit{

  dataArr: any[] = [];

  constructor(private programService: ProgramsService){}

  ngOnInit(): void {
    this.loadAllPrograms();
  }

  private loadAllPrograms() {
    this.programService.loadAllPrograms().subscribe(response => {
      this.dataArr = response.data;
    })
  }
}
