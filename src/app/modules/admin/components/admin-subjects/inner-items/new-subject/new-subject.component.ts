import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-new-subject',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    MatDialogClose,
    MatDialogContent,
    MatLabel,
    MatInput,
    MatFormField,
  ],
  templateUrl: './new-subject.component.html',
  styleUrl: './new-subject.component.scss'
})

export class NewSubjectComponent {}
