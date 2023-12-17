import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ListEmpComponent} from "./compnents/list-emp/list-emp.component";
import {DetailEmpComponent} from "./compnents/detail-emp/detail-emp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListEmpComponent, DetailEmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'threeapp';
}
