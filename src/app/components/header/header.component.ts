import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // NEW: A variable to track if the mobile menu is open or closed
  isMenuOpen = false;

  // NEW: A function to toggle the menu state
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}