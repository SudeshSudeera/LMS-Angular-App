import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { NewSubjectComponent } from "./inner-items/new-subject/new-subject.component";

@Component({
  selector: 'app-admin-subjects',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './admin-subjects.component.html',
  styleUrl: './admin-subjects.component.scss'
})

export class AdminSubjectsComponent {

  constructor(private matDialog: MatDialog) {}

  openNewSubjectForm() {
    console.log('data')
    let modalData = this.matDialog.open(NewSubjectComponent, {
      width: '500px',
      disableClose:true
    });

    modalData.afterClosed().subscribe(response => {
      if (response) {
        //load All subjects
      }
    })
  }
}
