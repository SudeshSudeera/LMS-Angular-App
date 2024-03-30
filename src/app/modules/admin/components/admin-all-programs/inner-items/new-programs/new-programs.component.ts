import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatCard } from "@angular/material/card";
import { MatCalendar, MatDatepickerModule } from "@angular/material/datepicker";
import { provideNativeDateAdapter } from "@angular/material/core";

@Component({
  selector: 'app-new-programs',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    MatCard,
    MatCalendar,
    MatDatepickerModule,
  ],
  templateUrl: './new-programs.component.html',
  styleUrl: './new-programs.component.scss'
})

export class NewProgramsComponent {
  // @ts-ignore
  selected: Date | null;
}
