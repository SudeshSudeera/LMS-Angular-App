import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-admin-context',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './admin-context.component.html',
  styleUrl: './admin-context.component.scss'
})

export class AdminContextComponent {}
