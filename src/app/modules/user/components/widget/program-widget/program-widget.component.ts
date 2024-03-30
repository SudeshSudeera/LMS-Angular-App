import { Component, Input } from '@angular/core';
import { DatePipe } from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program-widget',
  standalone: true,
    imports: [
        DatePipe, CommonModule
    ],
  templateUrl: './program-widget.component.html',
  styleUrl: './program-widget.component.scss'
})

export class ProgramWidgetComponent {
  @Input() name:string = '';
  @Input() cost:string = '';
  @Input() startDate:string = '';
  @Input() languages:any[] = [];
}
