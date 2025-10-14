import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll'; // <-- تأكد من وجود هذا السطر

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    NgxPageScrollModule // <-- وتأكد من وجود هذا السطر هنا
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}