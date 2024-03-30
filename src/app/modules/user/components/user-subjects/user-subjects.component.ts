import { Component } from '@angular/core';
import { ProgramsService } from '../../../../services/program/programs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-subjects.component.html',
  styleUrl: './user-subjects.component.scss'
})
export class UserSubjectsComponent {
  
  dataArr: any[] = [];

  constructor(private programService: ProgramsService){}

  ngOnInit(): void {
    this.loadAllSubjects();
  }

  private loadAllSubjects() {
    this.programService.loadSubjects().subscribe(response => {
      this.dataArr = response.data;
    })
  }
}
