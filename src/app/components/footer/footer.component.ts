import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // تأكد من وجود هذا السطر

@Component({
  selector: 'app-footer',
  standalone: true, // <-- إضافة: اجعل المكون standalone
  imports: [RouterModule], // <-- إضافة: استورد RouterModule هنا
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}