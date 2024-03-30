import { Component, Input } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-program-widget',
  standalone: true,
    imports: [
        DatePipe
    ],
  templateUrl: './program-widget.component.html',
  styleUrl: './program-widget.component.scss'
})

export class ProgramWidgetComponent {
  @Input() name:string = '';
  date = new Date();
}
