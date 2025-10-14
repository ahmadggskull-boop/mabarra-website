import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; // <-- إضافة: استيراد الهيدر
import { FooterComponent } from './components/footer/footer.component'; // <-- إضافة: استيراد الفوتر

@Component({
  selector: 'app-root',
  standalone: true,
  // إضافة imports وتضمين المكونات بداخلها
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mabarrat-king-hussein';
}